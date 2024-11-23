import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post('/api/users/signup', user);
  }

  signin(credentials: Credentials) {
    return this.http.post('/api/users/signin', credentials);
  }
}
