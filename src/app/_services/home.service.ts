import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Sms } from '../_models/home';


@Injectable({ providedIn: 'root' })
export class HomeService {
    constructor(private api:ApiService) { }

     getSms() {
           return this.api.get(`/report/getDashboardSMS`);
    }
     getMdp() {
        return this.api.get(`/report/getDashboardMDP`);
    }
     getPush(){
        return this.api.get('/report/getDashboardPush');
    }
}