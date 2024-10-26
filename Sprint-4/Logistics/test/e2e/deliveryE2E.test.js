const supertest = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('E2E Delivery Test', () => {
    it('should allow a driver to accept a delivery and update status to Delivered', async () => {
        // Step 1: Create a new delivery
        const deliveryResponse = await supertest(app)
            .post('/api/logistics/delivery')
            .send({ orderId: 'orderId1', driverId: 'driverId1',
                status: 'Assigned' });

                expect(deliveryResponse.status).to.equal(201);
                const deliveryId = deliveryResponse.body._id; // Get the created delivery ID
        
                // Step 2: Simulate driver accepting the delivery
                const acceptResponse = await supertest(app)
                    .put(`/api/logistics/delivery/${deliveryId}/accept`)
                    .send();
        
                expect(acceptResponse.status).to.equal(200);
                expect(acceptResponse.body.status).to.equal('In Transit');
        
                // Step 3: Update the delivery status to Delivered
                const updateResponse = await supertest(app)
                    .put(`/api/logistics/delivery/${deliveryId}/update`)
                    .send({ status: 'Delivered' });
        
                expect(updateResponse.status).to.equal(200);
                expect(updateResponse.body.status).to.equal('Delivered');
            });
        });
        