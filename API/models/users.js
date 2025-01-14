import mongoose from 'mongoose';

// Create a basic schima for the login
const Schima = mongoose.Schema;
const LoginSchima = new Schima({
    userName: String,
    email: String,
    password: String,
    date: {type: Date, default: Date.now}
})

export const loginUser = mongoose.model('users', LoginSchima);