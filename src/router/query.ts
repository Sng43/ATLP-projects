import { eraseQuery, getAllQueries, getQuery, makeQuery } from '../controllers/query';
import express from 'express';

export default (router: express.Router) => {
    router.get("/queries", getAllQueries)
    router.get("/query/:Name", getQuery)
    router.post("/query/create", makeQuery);
    router.delete("/query/:id", eraseQuery);
}