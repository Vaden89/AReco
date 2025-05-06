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

//Login
router.post("/login", validator(loginSchema), AuthController.login);

//Verify account
router.post("/verifyAccount", (req, res) => {});

//Request Password Reset
router.post("/req-reset-password", (req, res) => {});

//Reset Passowrd
router.post("/reset-password", (req, res) => {});

//Verify Otp
router.post("/verifyOtp", (req, res) => {});

export default router;
