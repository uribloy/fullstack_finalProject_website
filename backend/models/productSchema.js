const mongoose = require("mongoose");
const joi = require("joi");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 255,
        required: true,
    },
    description: {
        type: String,
        minlength: 2,
        maxlength: 1024,
        required: true,
    },
    brand: {
        type: String,
        minlength: 2,
        maxlength: 24,
        required: true
    },
    category: {
        type: String,
        minlength: 2,
        maxlength: 24,
        required: true
    },
    price: {
        type: Number,
        minlength: 1,
        maxlength: 999_999,
        required: true,
    },
    image: {
        url: {
            type: String,
            minlength: 11,
            maxlength: 1024,
            default: "../public/logoDefault.png",
        },
        alt: {
            type: String,
            minlength: 2,
            maxlength: 255,
            default: "user image",
        },
        _id: {
            type: mongoose.Types.ObjectId,
            default: new mongoose.Types.ObjectId,
        }
    },
    stock: {
        type: Number,
        minlength: 1,
        maxlength: 1_000,
        required: true,
    },
    likes: [
        {
            user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        },
    ],
},
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema, "products");

function validateProduct(product) {
    const schema = joi.object({
        title: joi.string().min(2).max(255).required(),
        description: joi.string().min(2).max(1024).required(),
        brand: joi.string().min(2).max(24).required(),
        category: joi.string().min(2).max(24).required(),
        price: joi.number().min(1).max(999_999).precision(2).required(),
        image: joi.object({
            url: joi.string().min(11).max(1024),
            alt: joi.string().min(2).max(255),
        }),
        stock: joi.number().min(1).max(1_000).integer().required(),
    });

    return schema.validate(product);
}
module.exports = { Product, validateProduct };