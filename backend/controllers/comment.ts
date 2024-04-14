import { Request, Response } from "express";

import {
  getAllComments,
  getCommentById,
  createNewComment,
  updateCommentById,
  deleteCommentById,
} from "../db/methods/comment";
import { handleServersideError } from "../helpers/errors/server";

import { InsertionData } from "../server";

// GET
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

// GET (by id)
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

// POST
export const createComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    // Check for required data for new comment
    const { newValues }: InsertionData = req.body;

    // If there's no title or message - return invalid request message
    if (!newValues) {
      return res
        .status(400)
        .json({ message: "Data for new comment must be provided." })
        .end();
    }

    // Create a new comment object, save it in the db and return success response message
    await createNewComment(newValues);

    return res.status(201).json({ message: "Successfully posted." }).end();
  } catch (error: any) {
    handleServersideError("createComment");
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// PUT
export const updateComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    // First, find the comment
    let comment = await getCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." }).end();
    }

    // Next, check for new message in the request's body
    const { newValues }: InsertionData = req.body;

    if (!newValues) {
      // If new data wasn't provided - return fail message
      return res
        .status(400)
        .json({ message: "The new message of the comment must be provided." })
        .end();
    }

    // Perform modification by updating all comment properties, even if they are equal
    Object.assign(comment, newValues);

    // Save changes
    await comment.save();

    // Finally, return success message
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

// PATCH
export const updateCommentPartially = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    // First, as always, find the comment
    let comment = await getCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." }).end();
    }

    // Now, if the comment exists - get modification data from request's body
    const { newValues } = req.body;

    // If needed data hasn't provided
    if (!newValues) {
      return res
        .status(400)
        .json({ message: "Modification values missing." })
        .end();
    }

    await updateCommentById(id, newValues);
    await comment.save();

    return res.status(200).json({ message: "Updated successfully." }).end();
  } catch (error: any) {
    handleServersideError("updateCommentPartially");
    return res.status(500).json({ message: "Internal Server Error." }).end();
  }
};

// DELETE
export const deleteComment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    const comment = getCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found." }).end();
    }

    // Check for successful deletion
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
