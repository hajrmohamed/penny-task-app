import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  // Register a new user
  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.usersService.register(username, password);
    return { username: user.username };
  }

  // Sign in a user and get a JWT token
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const token = await this.authService.validateUser(username, password);
    if (token) {
      return { access_token: token };
    }
    return { message: 'Invalid credentials' };
  }
}
