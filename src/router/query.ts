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
       /**
     * @openapi
     * paths:
     *   '/query/{id}':
     *     delete:
     *       tags:
     *         - Query
     *       summary: Delete a query by ID
     *       description: Deletes a query from the database using its ID.
     *       parameters:
     *         - in: path
     *           name: id
     *           required: true
     *           description: The ID of the query to delete
     *           schema:
     *             type: string
     *       responses:
     *         '200':
     *           description: qeury deleted successfully
     *         '404':
     *           description: query not found
     */
    router.delete("/query/:id", eraseQuery);
}