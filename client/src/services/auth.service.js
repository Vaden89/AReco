import { api } from "./api";
import { endpoints } from "../resources/endpoints";

export class AuthService {
  static async authenticate(payload) {
    const { data } = await api.post(endpoints.auth.login, payload);
    return data;
  }

  static async registerSchool(payload) {
    const { data } = await api.post(endpoints.auth.registerSchool, payload);
    return data;
  }

  static async registerStudent(payload) {
    const { data } = await api.post(endpoints.auth.registerStudent, payload);
    return data;
  }
}
