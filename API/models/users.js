import mongoose from 'mongoose';

// Create a basic schima for the login
const Schima = mongoose.Schema;
const UsersSchima = new Schima({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now},
    updated_date: {type: Date, default: Date.now}
})

export const Users = mongoose.model('users', UsersSchima);