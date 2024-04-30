import express from 'express';
import { createComment, getComments } from '../db/comments/comments';

/**
 * @openapi
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - comment
 *       properties:
 *         comment:
 *           type: string
 *           default: pleasure doing business with you
 */

export const getComment = async (req: express.Request, res:express.Response) => {
    try{
        const {comment} = req.body;

        if (!comment) {
            return res.status(403).json({message: "Nothing written"});
        }
        const newComment = await createComment({
            comment
        });

        return res.status(200).json(newComment);

    }catch(error){
        console.log(error);
        return res.status(400).json(error)
    }
}

export const getAllComments = async (req: express.Request, res: express.Response) => {
    try{
        const comments = await getComments();
        
        return res.status(200).json(comments)
    }catch (error){
        console.log(error);
        return res.status(400).json(error);
    }
}