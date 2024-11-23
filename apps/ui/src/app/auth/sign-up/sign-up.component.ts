import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpData = {
    username: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.signUpData).subscribe(
      (response) => {
        console.log('Sign-up successful', response);
        this.router.navigate(['/signin']);
      },
      (error) => {
        console.error('Sign-up error', error);
      }
    );
  }
}
