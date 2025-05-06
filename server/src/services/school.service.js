import { School } from "../models/school.model.js";
import { Student } from "../models/student.model.js";

export class SchoolService {
  static async registerSchool(payload) {
    let existing = await School.findOne({ email: payload.email }).select(
      "+password"
    );
    if (existing) {
      return null;
    }
    const school = new School(payload);
    return await school.save();
  }

  static async editSchoolDetails(uid, payload) {
    try {
      const school = School.findByIdAndUpdate(
        uid,
        {
          phone: payload.phone,
          address: payload.address,
          state: payload.state,
        },
        { new: true }
      );

      if (!school) {
        return { success: false, error: "School not found!" };
      }

      return {
        success: true,
        message: "Your schools details have been updated successfully!",
      };
    } catch (error) {
      return { success: true, error };
    }
  }

  static async addStudent(uid, payload) {
    try {
      const school = await School.findById(uid);

      if (!school) {
        return { success: false, error: "School does not exist" };
      }

      const student = await Student.findById(payload.studentId);
      if (!student) {
        return { success: false, error: "Student does not exist!" };
      }

      if (
        !school.students.includes(student._id) &&
        !student.attendedSchools.includes(school._id)
      ) {
        school.students.push(student._id);
        student.attendedSchools.push(school._id);
        await student.save();
        await school.save();
      }

      return {
        success: true,
        message: "Student added to school successfully.",
      };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
}
