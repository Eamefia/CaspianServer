import mongoose from 'mongoose';

const DeliveryLookupsSchema = mongoose.Schema({
    deliveryType:String,
    maxDays: Number,
    fee:Number,
    locations:[],
    date: { type: Date, default: Date.now },
});

export default mongoose.model('DeliveryConstants', DeliveryLookupsSchema);