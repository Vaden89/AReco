import express from "express";
import AuthRouter from "./auth.route.js";

const router = express.Router();

router.use("/auth", AuthRouter);

export default router;
