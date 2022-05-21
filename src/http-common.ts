import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://hanyadikhetvan.tormakristof.eu",

});

export default apiClient;