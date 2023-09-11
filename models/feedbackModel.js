import mongoose from 'mongoose';

const feedbackSchema = mongoose.Schema({
    unique_id: Number,
    likes: Number,
});

export default mongoose.model('devFeedback', feedbackSchema);