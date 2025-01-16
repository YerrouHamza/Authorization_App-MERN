import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors'
import login from './routes/login.js'
import authenticate from './middleware/tokenAuth.js'

// config the dotenv so we can use variabels form the .env file
dotenv.config();
const PORT = process.env.SERVER_PORT;
const dbUrl = process.env.DB_URL;

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// middleware fro configed the requestes from localhost
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests only from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true,
  }));

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