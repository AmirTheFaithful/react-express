import { model } from "mongoose";

import commentSchema from "../schemas/comment";

const CommentModel = model("Comment", commentSchema);

export default CommentModel;
