import express from "express";
import { createBlog, deleteBlog, getABlog, getAllBlogs, updateBlog } from "../controllers/blogs";
import { isAuthenticated } from "../middlewares";


export default (router: express.Router) => {
    /**
     * @swagger
     * '/blogs':
     *  get:
     *      summary: This api is used to get all users
     *      description: you are suppossed to be an authenticated user to see all users
     *      response:
     *          200:
     *              description: to get all users
     *              content:
     *                  application/json:
     *                     schema:
     *                        
     */
    router.get("/blogs", isAuthenticated,getAllBlogs)
    router.get("/blog/:title", getABlog)
    router.post("/blogs/create", isAuthenticated ,createBlog);
    router.delete("/blog/:id", isAuthenticated, deleteBlog);
    router.patch("/blog/:title", isAuthenticated, updateBlog);
}