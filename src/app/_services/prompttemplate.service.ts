import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class PrompttemplateService {
  constructor(private api: ApiService) {}

  getAll(param) {
    return this.api.post(`/provisioning/promptTemplate/search`, param);
  }
  getById(param) {
    return this.api.post(`/provisioning/promptTemplate/getByRecord`, param);
  }
  insertRecord(body: object) {
    return this.api.post(`/provisioning/promptTemplate`, body);
  }
  updateRecord(body: object) {
    return this.api.put(`/provisioning/promptTemplate`, body);
  }
  deleteRecord(body: object) {
    return this.api.post(`/provisioning/promptTemplate/delete`, body);
  }
}
