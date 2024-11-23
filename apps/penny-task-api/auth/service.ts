import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  // Generate JWT token
  async login(username: string): Promise<string> {
    const payload = { username };
    return this.jwtService.sign(payload);
  }

  // Sign in a user and return JWT token
  async validateUser(
    username: string,
    password: string
  ): Promise<string | null> {
    const user = await this.usersService.validateUser(username, password);
    if (user) {
      return this.login(username); // Generate JWT token
    }
    return null;
  }
}
