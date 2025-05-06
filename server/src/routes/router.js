import express from "express";
import AuthRouter from "./auth.route.js";
import UserRouter from "./user.route.js";
import StudentRouter from "./student.route.js";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);
router.use("/student", StudentRouter);

export default router;
