import { Student } from "../models/student.model.js";
import { jwtTokenGenerator } from "../utils/jwtsign.js";

export default class StudentService {
  static async createStudent(payload) {
    const student = new Student(payload);
    return await student.save();
  }

  static async studentLogin(payload) {
    const student = await Student.findOne({ email: payload.email }).select(
      "+password"
    );

    if (!student) {
      return null;
    }

    const isPasswordMatch = await student.comparePassword(payload.password);

    if (!isPasswordMatch) {
      return null;
    }

    const { password: _, ...studentData } = student.toObject();
    const token = jwtTokenGenerator(studentData._id);
    return {
      studentData,
      token,
    };
  }
}
