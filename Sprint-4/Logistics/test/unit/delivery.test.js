const Delivery = require('../../models/Delivery');
const { expect } = require('chai');
const mongoose = require('mongoose');

describe('Delivery Model', () => {
    before(async () => {
        // Connect to the test database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    after(async () => {
        // Disconnect and cleanup
        await mongoose.disconnect();
    });

    it('should create a new delivery', async () => {
        const delivery = new Delivery({
            orderId: new mongoose.Types.ObjectId(),
            driverId: new mongoose.Types.ObjectId(),
            status: 'In Transit',
        });
        const savedDelivery = await delivery.save();
        expect(savedDelivery.status).to.equal('In Transit');
    });

    it('should update delivery status to Delivered', async () => {
        const delivery = new Delivery({
            orderId: new mongoose.Types.ObjectId(),
            driverId: new mongoose.Types.ObjectId(),
            status: 'In Transit',
        });
        const savedDelivery = await delivery.save();

        savedDelivery.status = 'Delivered';
        const updatedDelivery = await savedDelivery.save();

        expect(updatedDelivery.status).to.equal('Delivered');
    });
});
