import { eraseQuery, getAllQueries, getQuery, makeQuery } from '../controllers/query';
import express from 'express';

export default (router: express.Router) => {

    /**
     * @openapi
     * paths:
     *   '/queries':
     *     get:
     *       tags:
     *         - Query
     *       summary: get all queries
     *       description: Retrieves all queries from the database.
     *       responses:
     *         '200':
     *           description: Successful response
     */
    router.get("/queries", getAllQueries)
    router.get("/query/:Name", getQuery)

    /**
     * @openapi
     * paths:
     *   '/query/create':
     *     post:
     *       tags:
     *         - Query
     *       summary: Login into existing user account
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/CreateUserInputForLogin'
     *       responses:
     *         '200':
     *           description: User logged in successfully     
     */
    router.post("/query/create", makeQuery);
    router.delete("/query/:id", eraseQuery);
}