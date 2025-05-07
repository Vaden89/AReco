import { Student } from "../models/student.model.js";

export default class StudentService {
  static async createStudent(payload) {
    const student = new Student(payload);
    return await student.save();
  }

  static async editStudentDetails(uid, payload) {
    try {
      const student = await Student.findByIdAndUpdate(
        uid,
        {
          phone: payload?.phone,
          address: payload?.address,
          lga: payload?.lga,
          dob: payload?.dob,
          state_of_origin: payload?.state_of_origin,
        },
        {
          new: true,
        }
      );

      if (!student) {
        return { success: false, error: "Student not found!" };
      }

      return {
        success: true,
        message: "Your details have been updated successfully!",
      };
    } catch (error) {
      return { success: true, error };
    }
  }

  static async getAttendedSchools(uid) {
    try {
      const student = await Student.findById(uid).populate("attendedSchools");

      if (!student) {
        return { success: false, error: "This student does not exist" };
      }

      return { success: true, data: student.attendedSchools };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
}
