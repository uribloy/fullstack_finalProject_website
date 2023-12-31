const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: {
                type: Number,
                minlength: 1,
                maxlength: 1_000,
                required: true,
            },
        },
    ],
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema, "orders");

module.exports = { Order };