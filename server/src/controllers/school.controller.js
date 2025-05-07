import { SchoolService } from "../services/school.service.js";

export class SchoolController {
  static async addStudent(req, res) {
    try {
      const uid = req.uid;
      const payload = req.body;

      if (!payload.studentId) {
        return res
          .status(400)
          .json({ success: false, error: "Student Id not provided" });
      }

      const result = await SchoolService.addStudent(uid, payload);

      if (!result.success) {
        return res.status(400).json({ success: false, error: result.error });
      }

      return res.status(200).json({ success: true, message: result.message });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }

  static async viewStudents(req, res) {
    try {
      const uid = req.uid;

      const result = await SchoolService.getStudents(uid);

      if (result.error === "School does not exist") {
        return res.status(404).json({ success: false, error: result.error });
      }

      if (!result.success) {
        return res.status(500).json({ success: false, error: result.error });
      }

      return res.status(200).json({
        success: true,
        message: "Students retrieved successfully!",
        data: result.data,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  }

  static async viewStudent(req, res) {
    try {
      const uid = req.uid;
      const studentId = req.params.id;

      const result = await SchoolService.getStudent(uid, studentId);

      if (result?.error?.includes("does not exist")) {
        return res.status(404).json({ success: false, error: result.error });
      }

      if (!result.success) {
        return res.status(500).json({ success: false, error: result.error });
      }

      return res.status(200).json({
        success: true,
        message: "Student data retrieved successfully",
        data: result.student,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
  }
}
