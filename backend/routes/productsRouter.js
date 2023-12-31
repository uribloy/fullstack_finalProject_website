const productRouter = require("express").Router();
const authMW = require("../middelware/auth");
const { validateProduct, Product } = require("../models/productSchema");
const { User } = require("../models/userSchema");

// create new product
productRouter.post("/", async (req, res) => {
    console.log("create");
    const { error } = validateProduct(req.body);
    if (error) {
        res.status(400).json(error.details[0].message);
        return;
    }
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});
// edit product
productRouter.put("/:id", authMW("isAdmin"), async (req, res) => {
    const { error } = validateProduct(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        ).select("-__v -address._id -image._id");
        res.send(product);
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});
// delete product
productRouter.delete("/:id", authMW("isAdmin"), async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).select("-__v -address._id -image._id");
        if (!product) {
            res.status(404).send("The product is not exists");
            return;
        } else {
            res.send(product);
        }
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});
// get all products
productRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});
// get product by id
productRouter.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).select("-__v -address._id -image._id");
        res.send(product);
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});
// add/sub likes in product
productRouter.patch("/like/:id", authMW(), async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.statusMessage =
            "Product Operation Failed. Product not found or the token is invalid.";
        res
            .status(401)
            .send(
                "Product Operation Failed. Product not found or the token is invalid."
            );
        return;
    }
    try {
        const foundProduct = await Product.findOne({
            _id: req.params.id,
            "likes.user_id": req.user._id,
        });
        if (foundProduct) {
            const product = await Product.findByIdAndUpdate(
                req.params.id,
                { "$pull": { likes: { user_id: req.user._id } } },
                { new: true });
            const user = await User.findByIdAndUpdate(
                req.user._id,
                { "$pull": { likes: { product_id: req.params._id } } },
                { new: true });

            res.json({ product, user });
        } else {
            const product = await Product.findByIdAndUpdate(
                req.params.id,
                { "$push": { likes: { user_id: req.user._id } } },
                { new: true }
            );
            const user = await User.findByIdAndUpdate(
                req.user._id,
                { "$push": { likes: { product_id: req.params._id } } },
                { new: true });
            res.json({ product, user });
        }
    } catch (err) {
        res.status(401).send(err.message);
    }
});

// check static-public
productRouter.get("/test", (req, res) => res.end("hello"));

module.exports = productRouter;