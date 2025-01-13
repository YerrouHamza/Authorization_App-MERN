import express from 'express';
import mongoose from 'mongoose'
import login from './routes/login.js'

const app = express()

// get the mongodb database and connected it with express js
const dbUrl = 'mongodb://localhost:27017/login_study';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Use the route file for the Login
app.use('/api/auth', login)

const PORT = '8080'
app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})