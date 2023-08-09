import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    unique_id: String,
    telnumber: String,
    password: String
});

export default mongoose.model('UserModel', UserSchema);