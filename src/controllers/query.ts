import {getQueries, getQueryByEmail, getQueryByName, createQuery, deleteQuery} from '../db/Query/query';
import express from 'express';

/**
 * @openapi
 * components:
 *   schemas:
 *     Query:
 *       type: object
 *       required:
 *         - Name
 *         - Email
 *         - Description
 *       properties:
 *         Name:
 *           type: string
 *           default: Emmy
 *         Email:
 *           type: string
 *           default: daemmy@gmail.com
 *         Description:
 *           type: string
 *           default: Pleasure doing business with you.
 */

export const makeQuery = async (req: express.Request, res:express.Response) => {
    try{
        const {Name, Email, Description} = req.body;

        if (!Name || !Email || !Description) {
            return res.status(403).json({message: "Name, Email, Description."});
        }
        const newQuery = await createQuery({
            Name,
            Email,
            Description
        });

        return res.status(200).json(newQuery);

    }catch(error){
        console.log(error);
        return res.status(400).json(error)
    }
}

export const getAllQueries = async (req: express.Request, res: express.Response) => {
    try{
        const queries = await getQueries();
        
        return res.status(200).json(queries)
    }catch (error){
        console.log(error);
        return res.status(400).json(error);
    }
}

export const eraseQuery = async (req:express.Request, res:express.Response) => {
    try{
        const { id } = req.body;

        const deleted = await deleteQuery(id)

        return res.status(200).json(deleted)
    }catch(error){
        console.log(error);
        return res.status(error).json(error)
    }
}

export const getQuery = async (req: express.Request, res: express.Response) => {
    try{
        const {Name} = req.params;

        if(!Name){
            return res.status(400).json({message: "There is no Email"})
        }

        const theOne = await getQueryByName(Name);

        return res.status(200).json(theOne)
    }catch(error){
        return res.status(400).json(error)
    }
}