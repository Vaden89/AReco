import express from "express";
import { accessTokenValidator } from "../middleware/tokenValidator";

const router = express.Router();

router.post("/add-student", accessTokenValidator, (req, res) => {});
router.get("/view-students", accessTokenValidator, (req, res) => {});
router.get("/view-student/:id", accessTokenValidator, (req, res) => {});
router.post("/add-transcript/:id", accessTokenValidator, (req, res) => {});

export default router;
