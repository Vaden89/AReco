import express from "express";
import { accessTokenValidator } from "../middleware/tokenValidator.js";
import { StudentController } from "../controllers/student.controller.js";

const router = express.Router();

router.get("/view-transcripts", accessTokenValidator, (req, res) => {});
router.get(
  "/view-attended-schools",
  accessTokenValidator,
  StudentController.viewAttendedSchools
);

export default router;
