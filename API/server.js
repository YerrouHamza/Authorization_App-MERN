import express from 'express';
import mongoose from 'mongoose'

const app = express()
const PORT = '8080'

// get the mongodb database and connected it with express js
const dbUrl = 'mongodb://localhost:27017/login_study';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.get('/', (req, res) => {
    res.status(200).send('All users show now')
})

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})