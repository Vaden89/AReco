import { endpoints } from "../resources/endpoints";
import { api } from "./api";

export class SchoolService {
  static async addStudent(payload) {
    const { data } = await api.post(endpoints.school.addStudent, payload);
    return data;
  }

  static async addResult(uid, payload) {
    const { data } = await api.post(endpoints.school.addStudent + uid, payload);
    return data;
  }
}
