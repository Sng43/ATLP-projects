import express from 'express';
import { createUser, getUserByEmail } from '../db/users/users';
import { authentication, random } from '../helpers/index';

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInputForLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: daemmy@gmail.com
 *         password:
 *           type: string
 *           default: qwert12345
 */

export const login = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password } = req.body;

        if (!email || !password){
            return res.status(400).send({message: "wrong messages"})
        }

        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
        
        if(!user) {
            return res.status(403).send({message: "please provide valid email"});
        }

        const expectedHash = authentication(user.authentication.salt, password)

        if (user.authentication.password !== expectedHash){
            return res.status(403).send({message: "wrong password"})
        }

        const salt = random()
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('AUTH-SNG', user.authentication.sessionToken, {domain: 'localhost', path: '/'})

        return res.status(200).send(user)


    }catch (error){
        console.log(error);
        return res.status(400)
    }
}

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInputForSignUp:
 *       type: object
 *       required:
 *         - email
 *         - username
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: daemmy@gmail.com
 *         username:
 *           type: string
 *           default: Emmy
 *         password:
 *           type: string
 *           default: qwert12345
 */

export const register = async (req: express.Request, res: express.Response) => {
    try{
        const {email, username, password} = req.body;

        if (!email || !username || !password ) {
            return res.status(400).send({message: "please fillout everything"});
        }

        const existingEmail = await getUserByEmail(email);

        if (existingEmail){
            return res.status(400).send({message: "please enter non existant email"})
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
        console.log(newUser)

        return res.status(200).send(newUser)
    }catch (error){
        console.log(error)
        return res.status(400)
    }
}