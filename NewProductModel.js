import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    unique_id: Number,
    productName:String,
    regularPrice:String,
    salePrice:String,
    brandName:String,
    category:String,
    itemsize:String,
    subCategory: String,
    discription: String,
    fileName: String,
    date: { type: Date, default: Date.now },
});

export default mongoose.model('NewProductdetails', ProductSchema);