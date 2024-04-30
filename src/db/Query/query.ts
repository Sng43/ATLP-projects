import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Description: {type: String, required: true},
})

export const queryModel = mongoose.model('query', querySchema);

export const getQueries = () => queryModel.find();
export const getQueryByName = (Name: string) => queryModel.findOne({Name});
export const getQueryByEmail = (Email: string) => queryModel.findOne({Email});

export const createQuery = (values: Record<string,any>) => new queryModel(values).save().then(blogs => blogs.toObject());
export const deleteQuery = (id:string) => queryModel.findByIdAndDelete(id);