import express from 'express';

import {get, merge} from 'lodash';
import { getUserBySessionToken } from '../db/users/users';

export const isOwner = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const { id } = req.params;
        const currentId = get(req, 'identity._id') as string;

        if(!currentId){
            return res.sendStatus(403);
        }

        if(currentId.toString() !== id){
            return res.sendStatus(403)
        }
        
        return next();
    }catch(error){
        console.log(error);
        res.status(400).json(error)
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try{
        const sessionToken = req.cookies['AUTH-SNG'];
    
        if(!sessionToken) {
           return res.sendStatus(403)
        };
    
        const existingUser = await getUserBySessionToken(sessionToken)

        if(!existingUser){
           return  res.sendStatus(403)
        }

        merge (req, {identity: existingUser})

        return next();
    }catch (error){
        console.log(error);
        return res.sendStatus(400)
    }

}