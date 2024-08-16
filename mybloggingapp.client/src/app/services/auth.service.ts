import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  private tokenKey: string = "token";
  private _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus = this._authStatus.asObservable();
  constructor() { }

  login(email: string, password: string) {
    return this.http.post<{ accessToken: string }>(environment.apiUrl + "/api/auth", { email, password });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn !== null;
  }
  get isLoggedIn() {
    if (localStorage.getItem(this.tokenKey)) return true;
    else return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.setAuthStatus(false);
  }

  setAuthStatus(isAuthenticated: boolean): void {
    this._authStatus.next(isAuthenticated);
  }
  
}
