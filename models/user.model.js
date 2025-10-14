import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],   //regular expression (format)
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);       //created model of that schema

export default User;