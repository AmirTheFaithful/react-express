import { Request, Response } from "express";

import {
  getAllComments,
  getCommentById,
  createNewComment,
  deleteCommentById,
} from "../db/methods/comment";

const handleServersideError = (name: string): void => {
  handleServersideError(`Something went wrong with "${name}" controller.`);
};

export const getComments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const comments = await getAllComments();

    if (!comments) {
      return res.status(404).json({ message: "Comments not found." }).end();
    }

    return res.status(200).json(comments).end();
  } catch (error: any) {
    handleServersideError("getComments");
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

export const getComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
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

    return res.status(200).json(comment).end();
  } catch (error: any) {
    handleServersideError("getComment");
    return res.status(500).json({ message: "Internal Server Error." }).end();
  }
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

    await createNewComment({ title, message });

    return res.status(201).json({ message: "Successfully posted." }).end();
  } catch (error: any) {
    handleServersideError("createComment");
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

export const updateComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    // First, find the comment
    const comment = await getCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." }).end();
    }

    // Next, check for new message in the request's body
    const { message } = req.body;

    if (!message) {
      // If new message wasn't provided - return fail message
      return res
        .status(400)
        .json({ message: "The new message of the comment must be provided." })
        .end();
    }

    // Copy present message for later checkings
    const oldMessage: string = comment.message!;

    // Save changes
    comment.message = message;
    await comment.save();

    // Check the difference between changes
    if (comment.message === oldMessage) {
      // If there's no difference between changes - return fail response message
      return res
        .json({
          message: "The message hasn't changed.",
        })
        .end();
    }

    // If there's a difference between new message and old one - return success response
    return res
      .status(201)
      .json({
        message: "Updated successfully.",
      })
      .end();
  } catch (error: any) {
    handleServersideError(error);
    return res
      .status(500)
      .json({
        message: "Internal Server Error.",
      })
      .end();
  }
};

export const deleteComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log("hi");
    const { id } = req.params;

    const comment = getCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." }).end();
    }

    const deletionResult = await deleteCommentById(id);

    if (!deletionResult) {
      return res
        .status(500)
        .json({ message: "Something went wrong when deleteing comment." })
        .end();
    }

    return res.status(201).json({ message: "Deleted successfully." }).end();
  } catch (error: any) {
    handleServersideError(error);
    return res
      .status(500)
      .json({
        message: "Internal Server Error.",
      })
      .end();
  }
};
