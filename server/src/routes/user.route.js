import express from "express";
import { validator } from "../middleware/validator.js";
import { UserController } from "../controllers/user.controller.js";
import { accessTokenValidator } from "../middleware/tokenValidator.js";
import {
  editSchoolDetailsSchema,
  editStudentDetailsSchema,
} from "../schema/validationSchemas.mjs";

const router = express.Router();

router.get("/get-user", accessTokenValidator, UserController.getUser);

router.put(
  "/edit-student-profile",
  accessTokenValidator,
  validator(editStudentDetailsSchema),
  UserController.updateStudentDetails
);

router.put(
  "/edit-school-profile",
  accessTokenValidator,
  validator(editSchoolDetailsSchema),
  UserController.updateSchoolDetails
);

export default router;
