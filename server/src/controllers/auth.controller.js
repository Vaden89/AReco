import { SchoolService } from "../services/school.service.js";
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

  static async loginStudent(req, res) {
    try {
      const { email, password } = req.body;
      const student = await StudentService.studentLogin({ email, password });

      if (!student) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Credentials " });
      }

      return res.status(200).json({
        success: true,
        data: student,
        message: "Login Successful",
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async registerSchool(req, res) {
    try {
      const { name, email, address, level, establishedYear, logoUrl } =
        req.body;
      const school = SchoolService.registerSchool({
        name,
        email,
        address,
        level,
        establishedYear,
        logoUrl,
      });

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

  static async loginSchool(req, res) {
    try {
      const { email, password } = req.body;
      const school = await SchoolService.loginSchool({ email, password });
      if (!school) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Credentials" });
      }

      return res
        .status(200)
        .json({ success: false, messgae: "Login sucessful", data: school });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "An error occured while trying to logins",
        error: error.message,
      });
    }
  }

  static async verifyEmail(req, res) {}
}
