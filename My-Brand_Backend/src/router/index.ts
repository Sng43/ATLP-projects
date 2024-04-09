import express from 'express';
import authentication from './authentication';
import users from './users';
import blogs from './blogs';


export const router = express.Router();

export default(): express.Router => {
    users(router);
    authentication(router);
    blogs(router)
    return router;
}