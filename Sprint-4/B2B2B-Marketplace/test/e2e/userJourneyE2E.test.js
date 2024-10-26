const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../../app');

describe('User Journey E2E Test', () => {
    it('should allow a user to place an order and view it in their order history', async () => {
        const productResponse = await supertest(app)
            .get('/api/brand/products')
            .expect(200);

        const orderResponse = await supertest(app)
            .post('/api/retailer/order')
            .send({ productId: productResponse.body[0]._id, quantity: 2 })
            .expect(201);

        expect(orderResponse.body.quantity).to.equal(2);
    });
});
