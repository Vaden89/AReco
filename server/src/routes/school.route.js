import express from "express";
import { SchoolController } from "../controllers/school.controller.js";
import { accessTokenValidator } from "../middleware/tokenValidator.js";

const router = express.Router();

router.post("/add-student", accessTokenValidator, SchoolController.addStudent);

router.get(
  "/view-students",
  accessTokenValidator,
  SchoolController.viewStudents
);

router.get(
  "/view-student/:id",
  accessTokenValidator,
  SchoolController.viewStudent
);

router.post("/add-transcript/:id", accessTokenValidator, (req, res) => {});

export default router;
