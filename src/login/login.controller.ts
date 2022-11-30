import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
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
      throw new InternalServerErrorException(error);
    }
  }
}
