import mongoose from 'mongoose';

// Create a basic schima for the login
const Schima = mongoose.Schema;
const UsersSchima = new Schima({
    userName: String,
    email: String,
    password: String,
    date: {type: Date, default: Date.now}
})

export const Users = mongoose.model('users', UsersSchima);