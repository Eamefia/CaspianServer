import mongoose from 'mongoose';

const CategoryLookUpSchema = mongoose.Schema({
    unique_id: Number,
    categoryName:String,
    lookUps: [],
    date: { type: Date, default: Date.now },
});

export default mongoose.model('CategoryLookUp', CategoryLookUpSchema);