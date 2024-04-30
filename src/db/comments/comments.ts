import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
    comment: {type: String, required: true},
})

export const commentsModel = mongoose.model('comments', commentsSchema);

export const getComments = () => commentsModel.find();
export const createComment = (values: Record<string,any>) => new commentsModel(values).save().then(comment => comment.toObject());