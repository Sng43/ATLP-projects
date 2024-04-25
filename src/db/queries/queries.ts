import mongoose from "mongoose";

const queriesSchema = new mongoose.Schema({
    email: {type: String, require: true},
    query: {type: String, require: true}
})

export const queryModel = mongoose.model('queries', queriesSchema);

export const findAllQueries = () = queryModel find()