import express from 'express';
import {getComment, getAllComments} from '../controllers/comments';

export default (router: express.Router) => {

    router.get("/comments", getAllComments )
    router.post("/comments/create", getComment);
}