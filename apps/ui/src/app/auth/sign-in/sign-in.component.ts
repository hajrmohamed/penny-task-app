import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  signInData = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signIn(this.signInData).subscribe(
      (response) => {
        localStorage.setItem('auth_token', response.token); // Save token
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Sign-in error', error);
      }
    );
  }
}
