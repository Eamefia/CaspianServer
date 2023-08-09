import mongoose from 'mongoose';

const ShippingDetailsSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phone: String,
    addressdiscription: String,
    region: String
});

export default mongoose.model('ShippingDetails', ShippingDetailsSchema);