import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({ providedIn: "root" })
export class ManageService {
  constructor(private api: ApiService) {}

  getAll(param) {
    return this.api.post(`/manage/getAdminSearch`, param);
  }
}
