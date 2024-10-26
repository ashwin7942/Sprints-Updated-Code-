const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    description: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
