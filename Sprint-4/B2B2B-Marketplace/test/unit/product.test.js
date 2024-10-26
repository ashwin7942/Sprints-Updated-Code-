const Product = require('../../models/Product');
const { expect } = require('chai');

describe('Product Model', () => {
    it('should create a new product', async () => {
        const product = new Product({ productName: 'Test Product', price: 100 });
        const savedProduct = await product.save();
        expect(savedProduct.productName).to.equal('Test Product');
    });
});
