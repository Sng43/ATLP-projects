import express from "express";
import { createBlog, deleteBlog, getABlog, getAllBlogs, updateBlog } from "../controllers/blogs";


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
    router.get("/blogs",getAllBlogs)

    /**
     * @openapi
     * paths:
     *   '/blog/{title}':
     *     get:
     *       tags:
     *         - Blogs
     *       summary: Retrieve a blog by title
     *       description: Retrieve a blog from the database using its title.
     *       parameters:
     *         - in: path
     *           name: title
     *           required: true
     *           description: The title of the blog to retrieve
     *           schema:
     *             type: string
     *       responses:
     *         '200':
     *           description: Successful response
     *           content:
     *             application/json:
     *               schema:
     *                 $ref: '#/components/schemas/ExistingBlog'
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
    router.post("/blogs/create",createBlog);
    /**
     * @openapi
     * paths:
     *   '/blog/{id}':
     *     delete:
     *       tags:
     *         - Blogs
     *       summary: Delete a blog by ID
     *       description: Deletes a blog from the database using its ID.
     *       parameters:
     *         - in: path
     *           name: id
     *           required: true
     *           description: The ID of the blog to delete
     *           schema:
     *             type: string
     *       responses:
     *         '200':
     *           description: Blog deleted successfully
     *         '404':
     *           description: Blog not found
     */
    router.delete("/blog/:id", deleteBlog);
    /**
     * @openapi
     * paths:
     *   '/blog/{title}':
     *     patch:
     *       tags:
     *         - Blogs
     *       summary: Update a blog by title
     *       description: Update a blog in the database using its title.
     *       parameters:
     *         - in: path
     *           name: title
     *           required: true
     *           description: The title of the blog to update
     *           schema:
     *             type: string
     *       requestBody:
     *         required: true
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/CreateABlog'
     *       responses:
     *         '200':
     *           description: Blog updated successfully
     *         '404':
     *           description: Blog not found
     */
    router.patch("/blog/:title", updateBlog);
}