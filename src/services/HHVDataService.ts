import http from "@/http-common";

/* eslint-disable */
class HHVDataService {
  getWeekNumber(): Promise<any> {
    return http.get("/hanyadikhetvan");
  }
}

export default new HHVDataService();
