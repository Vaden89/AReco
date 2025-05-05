import { api } from "./api";
import { endpoints } from "../resources/endpoints";

export class MiscService {
  static async uploadFile(payload) {
    const { data } = await api.post(endpoints.misc.upload, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  }
}
