import express from 'express';
import { createUser, getUserByEmail } from '../db/users/users';
import { authentication, random } from '../helpers/index';

export const login = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password } = req.body;

        if (!email || !password){
            return res.sendStatus(400)
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
        
        if(!user) {
            return res.sendStatus(403);
        }

        const expectedHash = authentication(user.authentication.salt, password)

        if (user.authentication.password !== expectedHash){
            return res.sendStatus(403)
        }

        const salt = random()
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('AUTH-SNG', user.authentication.sessionToken, {domain: 'localhost', path: '/'})

        return res.status(200).json(user).end()


    }catch (error){
        console.log(error);
        return res.status(400)
    }
}

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const {email, username, password} = req.body;

        if (!email || !username || !password) {
            return res.status(400);
        }

        const existingEmail = await getUserByEmail(email);

        if (existingEmail){
            return res.status(400)
        }

        const salt =random()

        const newUser = await createUser({
            username,
            email,
            password,
            authentication: {
                salt,
                password: authentication(salt, password),
            }
        })

        return res.status(200).json(newUser);
    }catch (error){
        console.log(error)
        return res.status(400)
    }
}