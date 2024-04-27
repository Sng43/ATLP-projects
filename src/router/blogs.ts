import express from "express";
import { createBlog, deleteBlog, getABlog, getAllBlogs, updateBlog } from "../controllers/blogs";
import { isAuthenticated } from "../middlewares";


export default (router: express.Router) => {


    /**
     * @openapi
     * paths:
     *   '/blogs':
     *     get:
     *       tags:
     *         - Blogs
     *       summary: Retrieve all blogs
     *       description: Retrieve a list of all blogs stored in the database.
     *       responses:
     *         '200':
     *           description: Successful response
     */
    router.get("/blogs", isAuthenticated,getAllBlogs)

    /**
     * @openapi
     * paths:
     *   '/blogs/:title':
     *     get:
     *       tags:
     *         - Blogs
     *       summary: Retriev a blog based on it's title
     *       description: Retrieve a list of all blogs stored in the database.
     *       responses:
     *         '200':
     *           description: Successful response
     */
    router.get("/blog/:title", getABlog)

    /**
     * @openapi
     * paths:
     *   '/blogs/create':
     *     post:
     *       tags:
     *         - Blogs
     *       summary: Create a new blog
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/CreateABlog'
     *       responses:
     *         '200':
     *           description: Blog created successfully     
     */
    router.post("/blogs/create", isAuthenticated ,createBlog);
    router.delete("/blog/:id", isAuthenticated, deleteBlog);
    router.patch("/blog/:title", isAuthenticated, updateBlog);
}