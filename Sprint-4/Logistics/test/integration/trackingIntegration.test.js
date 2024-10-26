const supertest = require('supertest');
const app = require('../../app');
const Delivery = require('../../models/Delivery');
const mongoose = require('mongoose');

describe('Tracking Integration', () => {
    before(async () => {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    after(async () => {
        await mongoose.disconnect();
    });

    it('should track and update delivery status', async () => {
        const delivery = new Delivery({
            orderId: new mongoose.Types.ObjectId(),
            driverId: new mongoose.Types.ObjectId(),
            status: 'In Transit',
        });
        const savedDelivery = await delivery.save();

        const response = await supertest(app)
            .post('/api/logistics/delivery/update')
            .send({ orderId: savedDelivery.orderId, status: 'Delivered' });

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('Delivered');
    });
});
