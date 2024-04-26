import express from 'express';
import authentication from './authentication';
import users from './users';
import blogs from './blogs';
// import pages from './pages';


export const router = express.Router();

export default(): express.Router => {
    // pages(router)
    users(router);
    authentication(router);
    blogs(router)
    return router;
}