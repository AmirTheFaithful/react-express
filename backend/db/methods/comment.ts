import CommentModel from "../models/comment";

export const getAllComments = async () => {
  return await CommentModel.find();
};

export const getCommentById = async (id: string) => {
  return await CommentModel.findById(id);
};

export const createNewComment = async (values: Record<string, any>) => {
  return new CommentModel(values).save().then((comment) => comment.toObject());
};

export const updateCommentById = async (
  id: string,
  values: Record<string, any>
) => {
  return await CommentModel.findByIdAndUpdate(id, values);
};

export const deleteCommentById = async (id: string) => {
  return await CommentModel.findByIdAndDelete(id);
};
