const Product = require('../models/Product');

// Get inventory for a brand
exports.getInventory = async (req, res, next) => {
  try {
    const products = await Product.find({ brandId: req.user._id });
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
};

// Update inventory (for a specific product)
exports.updateInventory = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};
