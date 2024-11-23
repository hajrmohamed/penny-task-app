import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UserSchema } from './users/user.model';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://<hajar02>:<hajarmongodb>@cluster0.mongodb.net/test'
    ),
    MongooseModule.forRoot('mongodb://localhost:27017/penny-task'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret: 'secretKey', // Use a secure key or environment variable
      signOptions: { expiresIn: '8h' }, // JWT expiration
    }),
    PassportModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
})
export class AppModule {}
