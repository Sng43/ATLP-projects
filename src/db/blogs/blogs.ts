import mongoose from "mongoose";

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

const blogsSchema = new mongoose.Schema({
    Title: {type: String, required: true},
    Image: {type: String, required: true},
    Intro: {type: String, required: true},
    Body: {type: String, required: true}
})

export const blogsModel = mongoose.model('blogs', blogsSchema);

export const getBlogs = () => blogsModel.find();
export const getBlogByTitle = (Title: string) => blogsModel.findOne({Title});
export const getBlogById = (id:string) => blogsModel.findById(id);

export const createBlogs = (values: Record<string,any>) => new blogsModel(values).save().then(blogs => blogs.toObject());
export const deleteBlogs = (id:string) => blogsModel.findByIdAndDelete(id);
export const updateBlogs = (id:string, values: Record<string,any>) => blogsModel.findByIdAndUpdate(id,values);