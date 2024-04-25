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
     * @swagger
     * /blogs:
     *   get:
     *     tags:
     *       - Blogs
     *     summary: Get all blogs
     *     description: Retrieve a list of all blogs.
     *     responses:
     *       200:
     *         description: Successfully retrieved the list of blogs.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Blog'
     */
    router.get("/blogs", getAllBlogs);

    /**
     * @swagger
     * /blog/{title}:
     *   get:
     *     tags:
     *       - Blogs
     *     summary: Get a specific blog by title
     *     description: Retrieve a blog by its title.
     *     parameters:
     *       - in: path
     *         name: title
     *         schema:
     *           type: string
     *         required: true
     *         description: The title of the blog.
     *     responses:
     *       200:
     *         description: Successfully retrieved the blog.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Blog'
     */
    router.get("/blog/:title", getABlog);

    /**
     * @swagger
     * /blogs/create:
     *   post:
     *     tags:
     *       - Blogs
     *     summary: Create a new blog
     *     description: Create a new blog with the provided information.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Blog'
     *     responses:
     *       200:
     *         description: Successfully created the blog.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Blog'
     *       400:
     *         description: Bad request. Invalid input data.
     */
    router.post("/blogs/create", isAuthenticated ,createBlog);

    /**
     * @swagger
     * /blog/{id}:
     *   delete:
     *     tags:
     *       - Blogs
     *     summary: Delete a blog by ID
     *     description: Delete a blog using its ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the blog to delete.
     *     responses:
     *       200:
     *         description: Successfully deleted the blog.
     *       404:
     *         description: Blog not found.
     */
    router.delete("/blog/:id", isAuthenticated, deleteBlog);

    /**
     * @swagger
     * /blog/{title}:
     *   patch:
     *     tags:
     *       - Blogs
     *     summary: Update a blog by title
     *     description: Update a blog using its title.
     *     parameters:
     *       - in: path
     *         name: title
     *         schema:
     *           type: string
     *         required: true
     *         description: The title of the blog to update.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Blog'
     *     responses:
     *       200:
     *         description: Successfully updated the blog.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Blog'
     *       404:
     *         description: Blog not found.
     */
    router.patch("/blog/:title", isAuthenticated, updateBlog);
}