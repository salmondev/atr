import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private api:ApiService) { }

    getAll(param) {
           return this.api.get(`/mokupusers`,param);
    }
}