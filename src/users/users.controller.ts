import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }

  @Get()
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    try {
      return this.usersService.findOne(email);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      if (updateUserDto.email !== email)
        throw new Error(this.constructor.name + ': invalid param');
      return this.usersService.update(updateUserDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    try {
      return this.usersService.remove(email);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: new Error(error),
      });
    }
  }
}
