import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'] // get the authorixation token from the header request
    if(!token) return res.status(401).json({message: 'Access Denied. No token provided'})

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY) // decoded the token using the jwt.verify method and JWT secret key
        req.user = decoded;

        next()
    } catch (error) {
        res.status(403).json({error: 'Invalid or expired token'})
    }
}


export default authenticate;