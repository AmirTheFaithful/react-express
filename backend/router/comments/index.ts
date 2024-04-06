import { Router } from "express";

import {
  getComment,
  getComments,
  createComment,
  updateComment,
  updateCommentPartially,
  deleteComment,
} from "../../controllers/comment";

export default (router: Router): void => {
  router.get("/comments/:id", getComment);
  router.get("/comments", getComments);

  router.post("/comments", createComment);
  router.put("/comments/:id", updateComment);
  router.patch("/comments/:id", updateCommentPartially);
  router.delete("/comments/:id", deleteComment);
};
