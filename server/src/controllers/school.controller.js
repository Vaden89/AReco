import { SchoolService } from "../services/school.service";

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
}
