const Order = require('../models/Order');
const Product = require('../models/Product');

exports.getSalesAnalytics = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const salesData = await Order.find({
            createdAt: { $gte: startDate, $lte: endDate },
        });
        res.status(200).json(salesData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching sales data', error: err });
    }
};

exports.getProductPerformance = async (req, res) => {
    try {
        const productData = await Product.aggregate([
            { $group: { _id: '$productName', totalSales: { $sum: '$quantitySold' } } },
            { $sort: { totalSales: -1 } },
        ]);
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product data', error: err });
    }
};
