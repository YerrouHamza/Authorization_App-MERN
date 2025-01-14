import express from 'express'
import { body, validationResult } from 'express-validator';
import { hash } from 'bcrypt';
import { Users } from '../models/users.js'

const router = express.Router()

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()

        res.status(200).send(users)
    } catch (error) {
        res.status(404).send({messgae: 'user dose not found'})
    }
})

// Get user by the ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await Users.find({_id: userId})
        
        if(user) {
            return res.status(200).send(user);
        }
        
        res.status(404).send({message: `the user with id ${userId} dosn't found`})
    } catch (error) {
        res.status(404).send({message: 'error when tyr to get the user'})
    }
})

// Create new user (register)
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Email is required and must be valid.'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long.'),
        body('userName').notEmpty().withMessage('Username is required.'),
    ], 
    async (req, res) => {
        // get the returned errors and return them as array
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array().map(error =>  `${error.path}: ${error.msg}`) });
        }

        // Get data from the body
        const {userName, password, email} = req.body

        try {
            // Check if there any existing users with the same email
            const isUserExist = await Users.findOne({email})
            if(isUserExist) {
                return res.status(400).json({messgae: `There already a user with this Email ${email}`})
            }

            // use the byCript hash method to hased and crypted the password
            const hasPassword = await hash(password, 10)

            // Create a new user using the body data with hased password and save it to the database
            const newUser = new Users({
                userName: userName,
                password: hasPassword,
                email: email
            })
            await newUser.save()
            
            return res.status(201).json({message: 'user have registered successfully'})
        } catch (error) {
            return res.status(500).json({message: 'Server error while creating the user'})
        }
    }
);


export default router