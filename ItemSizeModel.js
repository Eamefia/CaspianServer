import mongoose from 'mongoose';

const ItemSizeSchema = mongoose.Schema({
    itemsize: String,
    deliveryfee: Number,
    itemsizelookups: []
});

export default mongoose.model('ItemSize', ItemSizeSchema);