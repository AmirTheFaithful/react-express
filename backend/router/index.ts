import { Router } from "express";

import commentsRouter from "./comments";

const router = Router();

export default (): Router => {
  commentsRouter(router);

  return router;
};
