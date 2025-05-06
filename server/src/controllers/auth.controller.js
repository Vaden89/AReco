import { SchoolService } from "../services/school.service.js";
import { SharedService } from "../services/shared.service.js";
import StudentService from "../services/student.service.js";

export default class AuthController {
  static async registerStudent(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const payload = { firstName, lastName, email, password };
      await StudentService.createStudent(payload);

      return res.status(201).json({
        success: true,
        message: "Student successfully created",
      });
    } catch (error) {
      if (error.code) {
        return res
          .status(400)
          .json({ success: false, error: "Email already exists" });
      }
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async registerSchool(req, res) {
    try {
      const school = SchoolService.registerSchool(req.body);

      if (!school) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exists!" });
      }

      return res
        .status(201)
        .json({ success: true, message: "School successfully registered!" });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "An error occured while registering school",
        error: error.message,
      });
    }
  }

  static async login(req, res) {
    try {
      const user = await SharedService.login(req.body);

      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Credentials " });
      }

      return res.status(200).json({
        success: true,
        data: user,
        message: "Login Successful",
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async verifyEmail(req, res) {}
}
