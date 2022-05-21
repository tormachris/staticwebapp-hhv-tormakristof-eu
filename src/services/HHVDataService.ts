import http from "@/http-common";

/* eslint-disable */
class HHVDataService {
  getWeekNumber(): Promise<any> {
    return http.get("/");
  }
}

export default new HHVDataService();
