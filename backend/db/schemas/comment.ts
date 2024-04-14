import { Schema } from "mongoose";

const commentSchema = new Schema({
  type: String,
  title: String,
  message: String,
  postId: String,
  authorId: String,
  avatarURL: String,
});

export default commentSchema;
