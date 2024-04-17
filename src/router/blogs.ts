import express from "express";
import { createBlog, deleteBlog, getABlog, getAllBlogs, updateBlog } from "../controllers/blogs";
import { isAuthenticated } from "../middlewares";


export default (router: express.Router) => {
    router.get("/blogs", isAuthenticated,getAllBlogs)
    router.get("/blog/:title", getABlog)
    router.post("/blogs/create", isAuthenticated ,createBlog);
    router.delete("/blog/:id", isAuthenticated, deleteBlog);
    router.patch("/blog/:title", isAuthenticated, updateBlog);
}