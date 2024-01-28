// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/v1/auth';
  private tokenKey = 'authToken_POC_APP';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, {
      username: credentials.username,
      password: credentials.password
    });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.router.navigate(['/home']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
