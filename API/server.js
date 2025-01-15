import express from 'express';
import mongoose from 'mongoose'
import login from './routes/login.js'
import dotenv from 'dotenv';
import authenticate from './middleware/tokenAuth.js'

// config the dotenv so we can use variabels form the .env file
dotenv.config();
const PORT = process.env.SERVER_PORT;
const dbUrl = process.env.DB_URL;

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// get the mongodb database and connected it with express js
mongoose.connect(dbUrl)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Use the route file for the Login
app.use('/api/auth', login)

app.get('/api/protected', authenticate, (req, res) => {
    res.send('Welcome to the protected route');
});

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})