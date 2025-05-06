import express from "express";
import { accessTokenValidator } from "../middleware/tokenValidator";

const router = express.Router();

router.get("/view-transcripts", accessTokenValidator, (req, res) => {});
router.get("/view-attended-schools", accessTokenValidator, (req, res) => {});

export default router;
