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
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - User
     *     summary: Get all users
     *     description: Retrieve a list of all users.
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Successfully retrieved the list of users.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     *       401:
     *         description: Authentication credentials were missing or incorrect.
     */
    router.get('/users', isAuthenticated, getAllUsers);

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     tags:
     *       - User
     *     summary: Delete a user
     *     description: Delete a user by ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user to delete.
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Successfully deleted the user.
     *       401:
     *         description: Authentication credentials were missing or incorrect.
     *       403:
     *         description: The authenticated user does not have permission to perform this action.
     *       404:
     *         description: User not found.
     */
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);

    /**
     * @swagger
     * /users/{id}:
     *   patch:
     *     tags:
     *       - User
     *     summary: Update a user
     *     description: Update a user by ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Successfully updated the user.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       401:
     *         description: Authentication credentials were missing or incorrect.
     *       403:
     *         description: The authenticated user does not have permission to perform this action.
     *       404:
     *         description: User not found.
     */
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};