import StudentService from "../services/student.service.js";

export class StudentController {
  static async viewAttendedSchools(req, res) {
    try {
      const uid = req.uid;

      const result = await StudentService.getAttendedSchools(uid);

      if (result.error === "This student does not exist") {
        return res.status(404).json({ success: false, error: result.error });
      }

      if (!result.success) {
        return res.status(500).json({ success: false, error: result.error });
      }

      return res.status(200).json({
        success: true,
        message: "Attended schools retrieved successfully",
        data: result.data,
      });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }
}
