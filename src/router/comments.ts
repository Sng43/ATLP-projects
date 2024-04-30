import express from 'express';
import {getComment, getAllComments} from '../controllers/comments';

export default (router: express.Router) => {

    /**
     * @openapi
     * paths:
     *   '/comments':
     *     get:
     *       tags:
     *         - Comments
     *       summary: get all comments
     *       description: Retrieves all comments from the database.
     *       responses:
     *         '200':
     *           description: Successful response
     */
    router.get("/comments", getAllComments )

    /**
     * @openapi
     * paths:
     *   '/comments/create':
     *     post:
     *       tags:
     *         - Comments
     *       summary: Creates a comment
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Commment'
     *       responses:
     *         '200':
     *           description: Comment sent successfully     
     */
    router.post("/comments/create", getComment);
}