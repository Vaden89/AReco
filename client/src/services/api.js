import axios, { AxiosError } from "axios";

export const requestError = AxiosError;

export const api = axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:4001/api/",
  // timeout: 60000, (TODO: enable api timeout in prod)
  headers: { "Content-Type": "application/json", Accept: "*/*" },
});

export const setAuthorizationToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
