import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema({
    unique_id: Number,
    customer_name: String,
    comment: String
});

export default mongoose.model('devFeedback', feedbackSchema);