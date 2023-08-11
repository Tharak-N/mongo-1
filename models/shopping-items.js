
const { Schema, model } = require('mongoose')

const shoppingItems = new Schema({
    itemName: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    description: {type: String },
    price: { type: Number, required: true },
    weight: { type: String },
    rating: { type: Number },
    sellerInfo: { type: String },
    offers: { type: String }
})

module.exports = model('ShoppingItems', shoppingItems)