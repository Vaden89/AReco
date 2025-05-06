import { SharedService } from "../services/shared.service.js";
import { SchoolService } from "../services/school.service.js";
import StudentService from "../services/student.service.js";

export class UserController {
  static async getUser(req, res) {
    try {
      const uid = req.uid;
      const user = await SharedService.getUserDetails(uid);

      return res.status(200).json({
        success: true,
        message: "User details retrieved successfully",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }

  static async updateSchoolDetails(req, res) {
    try {
      const uid = req.uid;
      const payload = req.body;

      const result = await SchoolService.editSchoolDetails(uid, payload);

      if (!result.success && result.error === "School not found") {
        return res.status(400).json({ success: false, error: result.error });
      }

      if (!result.success) {
        return res.status(400).json({ success: false, error: result.error });
      }

      return res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }

  static async updateStudentDetails(req, res) {
    try {
      const uid = req.uid;
      const payload = req.body;

      const result = await StudentService.editStudentDetails(uid, payload);

      if (!result.success && result.error === "Student not found") {
        return res.status(400).json({ success: false, error: result.error });
      }

      if (!result.success) {
        return res.status(400).json({ success: false, error: result.error });
      }

      return res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }
}
