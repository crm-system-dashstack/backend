import { Router } from "express";

const router = new Router();

import userRouter from "./userRouter.js";

router.use(userRouter);

export default router;
