import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  timeout: 180000,
  headers: {
    Accept: "application/json",
  },
};

export default axios.create(axiosConfig);
