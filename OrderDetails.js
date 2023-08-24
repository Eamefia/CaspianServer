import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    name : String, 
    email : String, 
    phone : String,
    paymentchanel: String,
    order : {
        id : String, 
        order_items : []
    },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('OrderDetails', OrderSchema);