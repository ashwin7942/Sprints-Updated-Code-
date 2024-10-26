const mongoose = require('mongoose');
const Order = require('../../models/Order');
const { expect } = require('chai');

describe('Order Model', () => {
    before(async () => {
        // Connect to a test database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    after(async () => {
        // Disconnect and clean up
        await mongoose.disconnect();
    });

    it('should create a new order with default status Pending', async () => {
        const order = new Order({
            distributorId: new mongoose.Types.ObjectId(),
            productId: new mongoose.Types.ObjectId(),
            quantity: 5,
        });

        const savedOrder = await order.save();
        expect(savedOrder.status).to.equal('Pending');
        expect(savedOrder.quantity).to.equal(5);
    });

    it('should update order status to Delivered', async () => {
        const order = new Order({
            distributorId: new mongoose.Types.ObjectId(),
            productId: new mongoose.Types.ObjectId(),
            quantity: 2,
            status: 'Pending',
        });

        const savedOrder = await order.save();

        // Update the order status to Delivered
        savedOrder.status = 'Delivered';
        const updatedOrder = await savedOrder.save();

        expect(updatedOrder.status).to.equal('Delivered');
    });

    it('should throw validation error if quantity is missing', async () => {
        const order = new Order({
            distributorId: new mongoose.Types.ObjectId(),
            productId: new mongoose.Types.ObjectId(),
        });

        try {
            await order.save();
        } catch (err) {
            expect(err.errors.quantity).to.exist;
        }
    });
});
