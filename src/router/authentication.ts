import express from 'express'
import { login, register } from  '../controllers/authenticaion'

export default (router: express.Router) => {
    /**
     * @openapi
     * /signup
     * post:
     *   tags:
     *      - User
     *    summary: Register a user
     *    requestBody:
     *      required: true
     *      contents:
     *        application/json:
     *          schema:
     */
    router.post('/signup', register)
    router.post('/login', login)
}