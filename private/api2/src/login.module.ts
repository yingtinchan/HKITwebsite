import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { User } from './entitly/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import config from './config/config.json'

@Module({
  imports: [
    JwtModule.register({
      secret: config.SECRET_KEY,
      //signOptions: {expiresIn: '600s'},
    }),
    TypeOrmModule.forFeature(
      [User]
    ),
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}

