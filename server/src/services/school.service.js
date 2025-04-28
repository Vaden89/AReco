import { School } from "../models/school.model.js";
import { jwtTokenGenerator } from "../utils/jwtsign.js";

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

  static async loginSchool(payload) {
    let school = await School.findOne({ email: payload.email });
    if (!school) {
      return null;
    }

    const isPasswordMatch = school.comparePassword(payload.password);
    if (!isPasswordMatch) {
      return null;
    }

    const { password: _, ...schoolData } = school.toObject();
    const token = jwtTokenGenerator(schoolData._id);

    return {
      schoolData,
      token,
    };
  }
}
