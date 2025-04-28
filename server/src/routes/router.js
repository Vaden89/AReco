import express from "express";
import AuthRouter from "./auth.route.js";
import UserRouter from "./user.route.js";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);

export default router;
