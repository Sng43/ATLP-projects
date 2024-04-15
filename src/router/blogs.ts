import express from "express";
import { createBlog, deleteBlog, getAllBlogs, updateBlog } from "../controllers/blogs";
import { isAuthenticated } from "../middlewares";


export default (router: express.Router) => {
    router.get("/blogs", getAllBlogs)
    router.post("/blogs/create", isAuthenticated ,createBlog);
    router.delete("/blog/:id", isAuthenticated, deleteBlog);
    router.patch("/blog/:id", isAuthenticated, updateBlog);
}