import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this.http.post('/api/signup', data);
  }

  signIn(data: any): Observable<any> {
    return this.http.post('/api/signin', data);
  }

  signOut() {
    localStorage.removeItem('auth_token');
  }
}
