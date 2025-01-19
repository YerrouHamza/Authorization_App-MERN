import express from 'express'
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Users from '../models/users.js'

const router = express.Router()

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()

        res.status(200).send(users)
    } catch (error) {
        res.status(404).send({messgae: 'user dose not found'})
    }
})

/** Login into existing accont
    *  Type: GET
    *  Body: email: (required) & password: (required)
    *  Return: JWT_Token
*/
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email is required and must be valid'),
        body('password')
            .isLength(6)
            .withMessage('Password must be at least 6 characters long.')
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array().map(error => `${error.path}: ${error.msg}`)})
        }
        
        try {
            const {email, password} = req.body

            // Check if the user is exits
            const loginUser = await Users.findOne({email});
            console.log(loginUser);
            if(!loginUser) {
                return res.status(404).json({message: `There is no users with this Email ${email}`})
            }

            // Check the password if it currect
            const isPasswordCurrect = await bcrypt.compare(password, loginUser.password)
            if(!isPasswordCurrect) {
                return res.status(500).json({message: `The Password is wrong please try again`})
            }

            // Created the Token with JWT(jsonwebtoken) method and make it expired on 30min and used the SECRET Key from .env file
            const token = jwt.sign(
                { id: loginUser._id, email: loginUser.email, userName: loginUser.userName }, // payload {The Data that we coded so we get it when we decoded it}
                JWT_SECRET_KEY, // secret key {key that we genrated it and we use it as base to coded and decoded the token}
                { expiresIn: '1h' } // expired duration
            )

            const returnUserData = {
                userName: loginUser.userName,
                email: loginUser.email,
                date: loginUser.date
            }

            res.status(200).json({ token, loginUser: returnUserData });
        } catch (error) {
            res.status(500).json({message: 'Server error while creating the user'})
        }
    }
)

/** Create new user (register)
    *  Type: GET
    *  Body: userName & email: (required) & password: (required)
*/
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
            return res.status(400).json({ errors: errors.array().map(error =>  `${error.path}: ${error.msg}`) });
        }

        // Get data from the body
        const {userName, password, email} = req.body

        try {
            // Check if there any existing users with the same email
            const isUserExist = await Users.findOne({email})
            if(isUserExist) {
                return res.status(401).json({messgae: `There already a user with this Email ${email}`})
            }

            // Create a new user using the body data with hased password and save it to the database
            const newUser = new Users({userName, password, email})
            await newUser.save()
            
            return res.status(200).json({message: 'user have registered successfully'})
        } catch (error) {
            return res.status(500).json({message: 'Server error while creating the user'})
        }
    }
);


export default router