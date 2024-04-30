import express from "express";

import { getAllUsers, deleteUser,updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              username:
 *                  type: string
 *              email:
 *                  type: string
 *              authentication:
 *                  type: object
 *                  properties:
 *                      password:
 *                          type: string
 *                      salt:
 *                          type: string
 *                      sessionToken:
 *                          type: string
 *          required:
 *              - username
 *              - email
 *              - authentication
 */

export default (router: express.Router) => {
       /**
     * @openapi
     * paths:
     *   '/users':
     *     get:
     *       tags:
     *         - Users
     *       summary: Retrieve all users
     *       description: Gets all users stored in the database and credential.
     *       responses:
     *         '200':
     *           description: Successful response
     */
    router.get('/users',isAuthenticated, getAllUsers)
    router.delete('/users/:id',isAuthenticated ,isOwner,deleteUser)
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser )
}