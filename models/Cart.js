const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity must not be empty!'],
    },
    user_id: {
        type: String,
        required: [true, 'User Id must not be empty!'],
    },
    color: {
        type: String,
    },
    size: {
        type: String,
        required: [true, 'Size must not be empty!'],
    },
    is_checkout: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.models.Cart || mongoose.model('Cart', CartSchema)
