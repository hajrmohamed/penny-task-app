import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: { username: string; password: string }) {
    return this.http.post('/api/users/signup', user);
  }

  signin(credentials: { username: string; password: string }) {
    return this.http.post('/api/users/signin', credentials);
  }
}
