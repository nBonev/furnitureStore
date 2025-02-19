import bcrypt from 'bcrypt';
import User from "../models/User.js"
import { generateToken } from '../utils/tokenUtils.js';


export default {
    register(userData) {
        return User.create(userData)
    },

    async login(email, password) {
        const user = await User.findOne({email});
        if(!user) {
            throw new Error('Email or Password are incorrect!');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            throw new Error('Email or Password are incorrect!');
        }

        const token = generateToken(user);

        const result = {
            email,
            authToken: token,
            userId: user.id,
        }

        return result;
    }
}