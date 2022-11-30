import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from '../user-repository/users.repository';
import { LoginDto } from '../dto/login-dto';

@Injectable()
export class LoginService {
  constructor(private readonly usersRepository: UsersRepository) {}

  login(loginDto: LoginDto): boolean {
    const { email, password } = loginDto;
    const entity = this.usersRepository.findOne(email);
    if (!entity)
      throw new HttpException(
        this.constructor.name + ': user not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return entity.password == password;
  }
}
