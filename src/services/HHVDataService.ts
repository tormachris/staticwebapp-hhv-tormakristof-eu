import http from "@/http-common";

class HHVDataService {
  getWeekNumber(): Promise<any> {
    return http.get("/hanyadikhetvan");
  }
}

export default new HHVDataService();
