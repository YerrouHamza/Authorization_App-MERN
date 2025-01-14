import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

// Create a basic schima for the login
const Schima = mongoose.Schema;
const UsersSchima = new Schima({
    userName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now},
    updated_date: {type: Date, default: Date.now}
})

// Hash the password before saving to the database
UsersSchima.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10); // Hash with salt rounds = 10
    next();
});

const Users = mongoose.model('users', UsersSchima);

export default Users