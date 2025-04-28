import express from "express";
import AuthController from "../controllers/auth.controller.js";
import { validator } from "../middleware/validator.js";
import {
  loginSchema,
  registerSchoolSchema,
  registerStudentSchema,
} from "../schema/validationSchemas.mjs";

const router = express.Router();

//Register Student
router.post(
  "/register-student",
  validator(registerStudentSchema),
  AuthController.registerStudent
);

//Register School
router.post(
  "/register-school",
  validator(registerSchoolSchema),
  AuthController.registerSchool
);

//Login for students
router.post(
  "/student-login",
  validator(loginSchema),
  AuthController.loginStudent
);

//Login for schools
router.post(
  "/school-login",
  validator(loginSchema),
  AuthController.loginStudent
);

//Verify account
router.post("/verifyAccount", (req, res) => {});

//Request Password Reset
router.post("/req-reset-password", (req, res) => {});

//Reset Passowrd
router.post("/reset-password", (req, res) => {});

//Verify Otp
router.post("/verifyOtp", (req, res) => {});

export default router;

//Let's say I want to verify my account
//An email is being sent to me, saying verify your account, it would give an otp
//You would come back to the application and input that otp
