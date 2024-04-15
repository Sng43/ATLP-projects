import express from 'express'
import { login, register } from  '../controllers/authenticaion'

export default (router: express.Router) => {
    router.post('/signup.html', register)
    router.post('/login.html', login)
}