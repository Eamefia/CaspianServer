import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    unique_id: String,
    firstName: String,
    lastName: String,
    email:String,
    telnumber: String,
    password: String
});

export default mongoose.model('UserModel', UserSchema);