import { Router } from "express";

import {
  getComment,
  getComments,
  createComment,
} from "../../controllers/comment";

export default (router: Router): void => {
  router.get("/comments/:id", getComment);
  router.get("/comments", getComments);

  router.post("/comments", createComment);
};