import { createBlogs, getBlogByTitle, deleteBlogs, getBlogs, blogsModel } from '../db/users/blogs/blogs';
import express from 'express';


export const createBlog = async (req: express.Request, res:express.Response) => {
    try{
        const {Title, Image, Intro ,Body} = req.body;

        if (!Title || !Image || !Intro || !Body) {
            return res.status(403).json({message: "Title, Image, or Body is missing."});
        }

        const existingTitle = await getBlogByTitle(Title);

        if(existingTitle === Title){
            return res.status(403).json({message: "Title already Exists"})
        }

        const newBlog = await createBlogs({
            Title,
            Image,
            Intro,
            Body
        });

        return res.status(200).json(newBlog);

    }catch(error){
        console.log(error);
        return res.status(400).json(error)
    }
}

export const getAllBlogs = async (req: express.Request, res: express.Response) => {
    try{
        const blogs = await getBlogs();
        
        return res.status(400).json(blogs)
    }catch (error){
        console.log(error);
        return res.status(400).json(error);
    }
}

export const deleteBlog = async (req:express.Request, res:express.Response) => {
    try{
        const { id } = req.body;

        const deleted = await deleteBlogs(id)

        return res.status(200).json(deleted)
    }catch(error){
        console.log(error);
        return res.status(error).json(error)
    }
}

export const updateBlog = async (req: express.Request, res: express.Response) => {
    try {
        const { title } = req.params;
        const {Title, Image,Intro ,Body} = req.body;
    
        if (!Title || !Image || !Intro ||!Body) {
            return res.status(400).json({message: "cheack again Somethong is missing"});
        }
    
        const blog = await getBlogByTitle(title);

        blog.Title = Title
        blog.Image = Image
        blog.Intro = Intro
        blog.Body = Body

        await blog.save();

        return res.status(200).json(blog)
    }catch(error){
        console.log(error);
        return res.status(400).json(error)
    }
}

export const getABlog = async (req: express.Request, res: express.Response) => {
    try{
        const {title} = req.params;

        if(!title){
            return res.status(400).json({message: "There is no title"})
        }

        const theOne = await getBlogByTitle(title);

        return res.status(200).json(theOne)
    }catch(error){
        return res.status(400).json(error)
    }
}