import { Schema } from "mongoose";

const commentSchema = new Schema({
  title: String,
  message: String,
});

export default commentSchema;
