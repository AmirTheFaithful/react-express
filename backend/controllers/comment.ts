import { Request, Response } from "express";

import {
  getAllComments,
  getCommentById,
  createNewComment,
} from "../db/methods/comment";

export const getComments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const comments = await getAllComments();

  if (!comments) {
    return res.status(404).json({ message: "No comments were found." }).end();
  }

  return res.status(200).json({ payload: comments }).end();
};

export const getComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const comment = await getCommentById(id);

  if (!comment) {
    return res
      .status(404)
      .json({
        message: "Comment not found.",
      })
      .end();
  }

  return res.status(200).json({ payload: comment }).end();
};

export const createComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // Check for required title and message
    const { title, message } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ message: "Title of the comment must be provided." })
        .end();
    } else if (!message) {
      return res
        .status(400)
        .json({ message: "Message of the comment must be provided." })
        .end();
    }

    const newComment = await createNewComment({ title, message });

    return res.status(201).json({ payload: newComment }).end();
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message:
          "Internal Server Error. Something went wrong with comment creating controller.",
      });
  }
};
