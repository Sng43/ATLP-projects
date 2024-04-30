import express from "express";
import { createBlog, deleteBlog, getABlog, getAllBlogs, updateBlog } from "../controllers/blogs";
import { isAuthenticated } from "../middlewares";
/**
 * @swagger
 * components:
 *  schemas:
 *      Blog:
 *          type: object
 *          required:
 *              -Title
 *              -Image
 *              -Intro
 *              -Body
 *          properties:
 *             Title:
 *              type: string
 *              default: Swagger Documentation.
 *             Image:
 *              type: string
 *              default: (Image Url).
 *             Intro:
 *              type: string
 *              default: This is an introduction of the blog.
 *             Body:
 *              type: string
 *              default: This is some additional inforamtion of the blog.
 *             
 */

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
    router.post("/blogs/create", isAuthenticated ,createBlog);
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
    router.delete("/blog/:id", isAuthenticated, deleteBlog);
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
    router.patch("/blog/:title", isAuthenticated, updateBlog);
}