const Order = require('../../models/Order');
const Product = require('../../models/Product');
const { expect } = require('chai');

describe('Order and Product Integration', () => {
    it('should place an order for a product', async () => {
        const product = new Product({ productName: 'Test Product', price: 100 });
        await product.save();

        const order = new Order({ productId: product._id, quantity: 2 });
        const savedOrder = await order.save();
        
        expect(savedOrder.quantity).to.equal(2);
    });
});
