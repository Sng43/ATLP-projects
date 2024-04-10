import { startingPoint } from '../controllers/pages';
import express from 'express';
import router from 'router';

export default (router: express.Router) => {
    router.get("/home",startingPoint)
}