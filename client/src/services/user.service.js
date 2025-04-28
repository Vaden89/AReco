import { endpoints } from "../resources/endpoints";
import { api } from "./api";

export class UserService {
  static async getUserData() {
    const { data } = api.get(endpoints.user.getUser);
    return data;
  }

  static async editStudentDetails(payload) {
    const { data } = api.post(endpoints.user.editStudentDetails, payload);
    return data;
  }
}
