import mongoose from 'mongoose';

const BillingAddressSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    city: String,
    phone: String,
    addressdiscription: String,
    region: String
});

export default mongoose.model('BillingAddress', BillingAddressSchema);