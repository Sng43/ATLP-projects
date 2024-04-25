import express from 'express'
import { login, register } from  '../controllers/authenticaion'

export default (router: express.Router) => {
    /**
     * @swagger
     * tags:
     *   name: Authentication
     *   description: User authentication
     */

    /**
     * @swagger
     * /signup:
     *   post:
     *     summary: Register a new user
     *     description: Register a new user with the provided credentials.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *             required:
     *               - username
     *               - email
     *               - password
     *     responses:
     *       200:
     *         description: User registered successfully
     *       400:
     *         description: Bad request. Invalid input data.
     *       409:
     *         description: Conflict. User with the provided email already exists.
     */
    router.post('/signup', register);

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Authenticate user
     *     description: Authenticate a user with the provided credentials.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *             required:
     *               - email
     *               - password
     *     responses:
     *       200:
     *         description: User authenticated successfully
     *       400:
     *         description: Bad request. Invalid input data.
     *       401:
     *         description: Unauthorized. Incorrect email or password.
     */
    router.post('/login', login);
};
