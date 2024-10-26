const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  distributorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  retailerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // New field for retailer orders
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Delivered'], default: 'Pending' },
  crmSyncStatus: { type: String, default: 'Not Synced' },  // CRM sync status
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
