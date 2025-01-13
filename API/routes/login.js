import express from 'express'
import mongoose from 'mongoose';
const router = express.Router()


// Create a basic schima for the login
const Schima = mongoose.Schema;
const LoginSchima = new Schima({
    userName: String,
    email: String,
    password: String,
    date: {type: Date, default: Date.now}
})

const loginUser = mongoose.model('users', LoginSchima);

// // Create a new blog post and save it to the database
// const newUser = new loginUser({
//     userName: 'hamza yerrou',
//     password: '1234567',
//     email: 'test@email.com'
// })

// newUser.save()
//     .then(() => console.log('new user created'))
//     .catch(() => console.log('error while creaet new user'))

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await loginUser.find()

        res.status(200).send(users)
    } catch (error) {
        res.status(404).send({messgae: 'user dose not found'})
    }
})

// Get user by the ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await loginUser.find({_id: userId})
        
        if(user) {
            return res.status(200).send(user);
        }
        
        res.status(404).send({message: `the user with id ${userId} dosn't found`})
    } catch (error) {
        res.status(404).send({message: 'error when tyr to get the user'})
    }
})

// Create new user
router.post('/', async (req, res) => {
    try {
       
    } catch (error) {
        
    }
})


export default router