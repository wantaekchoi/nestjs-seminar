import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from '../dto/login-dto';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Patch('/')
  login(@Body() loginDto: LoginDto) {
    try {
      return this.loginService.login(loginDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }
}
