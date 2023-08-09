import mongoose from 'mongoose';

const LocationSchema = mongoose.Schema({
    unique_id: Number,
    region:String,
    townLookUps: {},
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Location', LocationSchema);