const cartRouter = require("express").Router();

const authMW = require("../middelware/auth");
const { Product } = require("../models/productSchema");
const { User } = require("../models/userSchema");

//get cart
cartRouter.get("/", authMW(), async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("cart.product_id");
        res.json({ cart: user.cart });
    } catch (err) {
        res.status(401).send(err.message);
        return;
    }
});

// mange cart
cartRouter.patch("/", authMW(), async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-__v -password -name._id -address._id -image._id -cart._id");
        const itemCart = await User.findOne({ _id: req.user._id, "cart.product_id": req.body.product_id });
        const productToRemove = await Product.findOne({ _id: req.body.product_id });

        if (!user.cart.length) {
            const addNewCart = await User.findByIdAndUpdate(
                req.user._id,
                { "$push": { cart: { product_id: req.body.product_id, quantity: req.body.quantity } } },
                { new: true });
            res.json({ addNewCart });
        } else if (itemCart && req.body.quantity !== 0) {
            const upItemCart = await User.findOneAndUpdate(
                { _id: req.user._id, "cart.product_id": req.body.product_id },
                { $set: { 'cart.$.quantity': req.body.quantity } },
                { new: true }
            );
            res.json(upItemCart);
        } else if (productToRemove && req.body.quantity === 0) {
            const removedProductId = productToRemove._id;
            const delProduct = await User.findOneAndUpdate(
                { _id: req.user._id, "cart.product_id": removedProductId },
                { $pull: { cart: { product_id: removedProductId } } },
                { new: true }
            );

            res.json(delProduct);
        } else {
            const addNewItem = await User.findByIdAndUpdate(
                req.user._id,
                { "$push": { cart: { product_id: req.body.product_id, quantity: req.body.quantity } } },
                { new: true });
            res.json({ addNewItem });
        }

    } catch (err) {
        res.status(401).send(err.message);
    }
});

module.exports = cartRouter;
