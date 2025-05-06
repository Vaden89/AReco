import { School } from "../models/school.model.js";
import { Student } from "../models/student.model.js";
import { jwtTokenGenerator } from "../utils/jwtsign.js";

export class SharedService {
  static async login(payload) {
    let user = await School.findOne({ email: payload.email }).select(
      "+password"
    );

    if (!user) {
      user = await Student.findOne({ email: payload.email }).select(
        "+password"
      );
    }

    if (!user) {
      return null;
    }

    const isPasswordMatch = user.comparePassword(payload.password);
    if (!isPasswordMatch) {
      return null;
    }

    const { password: _, ...userData } = user.toObject();
    const token = jwtTokenGenerator(userData._id);
    return {
      userData,
      token,
    };
  }

  static async getUserDetails(uid) {
    try {
      let user = await Student.findById(uid);
      if (!user) {
        user = await School.findById(uid);
      }
      console.log(user);
      return user;
    } catch (error) {
      return error;
    }
  }
}
