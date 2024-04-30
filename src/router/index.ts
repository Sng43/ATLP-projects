import express from 'express';
import authentication from './authentication';
import users from './users';
import blogs from './blogs';
import comments from './comments';
import query from './query';
// import pages from './pages';


export const router = express.Router();

export default(): express.Router => {
    comments(router)
    query(router)
    users(router);
    authentication(router);
    blogs(router)
    return router;
}