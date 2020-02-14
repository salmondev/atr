import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Token } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: string;
    public currentUser: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = localStorage.getItem('token');
        this.currentUser = this.currentUserSubject;
    }

    public get currentUserValue(): string {
        return this.currentUserSubject;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('token',user.token);
                this.currentUserSubject = user.token;
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.currentUserSubject = null;
    }
}