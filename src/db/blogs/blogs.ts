import mongoose from "mongoose";

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