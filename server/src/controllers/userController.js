import { Router } from "express";
import userService from "../service/userService.js";


const userController = Router();

userController.post('/register', async (req, res) => {
    const userData = req.body;

    const {user, token} = await userService.register(userData);

    // TODO: login
    res.json({
        _id: user.id,
        accessToken: token,
        email: user.email,
    })
});

userController.post('/login', async (req, res) => {
    const {email, password} = req.body;

    const {user, token} = await userService.login(email, password);

    res.json({
        _id: user.id,
        accessToken: token,
        email: user.email,
    });
});

export default userController;