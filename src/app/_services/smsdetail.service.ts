import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class SmsdetailService {
  constructor(private api: ApiService) {}

  getAll(param) {
    return this.api.post(`/report/getDetailReportSMS`, param);
  }

  insertRecord(body: object) {
    return this.api.post(`/provisioning/menuTemplate`, body);
  }
  updateRecord(body: object) {
    return this.api.put(`/provisioning/menuTemplate`, body);
  }

  convertFile(body: object) {
    return this.api.post(`provisioning/convert/templateFile`, body);
  }
}
