import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Register a new user
  async register(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new this.userModel({ username, password: hashedPassword });
    return newUser.save();
  }

  // Validate a user's credentials
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      return { username: user.username }; // Return a simple user object if credentials are valid
    }
    return null;
  }

  // Find a user by username
  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username });
  }
}
