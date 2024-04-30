import express from 'express'
import { login, register } from  '../controllers/authenticaion'

export default (router: express.Router) => {

    /**
     * @openapi
     * paths:
     *   '/signup':
     *     post:
     *       tags:
     *         - Authentication
     *       summary: Register new users
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/CreateUserInputForSignUp'
     *       responses:
     *         '200':
     *           description: User registered successfully     
     */
    router.post('/signup', register)
    /**
     * @openapi
     * paths:
     *   '/login':
     *     post:
     *       tags:
     *         - Authentication
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
    router.post('/login', login)
}