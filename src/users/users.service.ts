import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from '../in-memory-repository/users.repository';
import { UserMapper } from '../in-memory-repository/user.mapper';
import { User } from './entity/user';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): User {
    const { email, password, nickname } = createUserDto;
    const user = { email, password, nickname: nickname ?? '' };
    if (this.usersRepository.findOne(email))
      throw new Error(this.constructor.name + ': email duplicated');
    const entity = this.usersRepository.create(user);
    if (!entity) throw new Error(this.constructor.name + ': creation failed');
    return UserMapper.entityToDomain(entity);
  }

  findAll(): User[] {
    return this.usersRepository
      .findAll()
      .map((entity) => UserMapper.entityToDomain(entity));
  }

  findOne(email: string): User {
    const entity = this.usersRepository.findOne(email);
    if (!entity) throw new Error(this.constructor.name + ': user not found');
    return UserMapper.entityToDomain(entity);
  }

  update(updateUserDto: UpdateUserDto): number {
    const { email, password, nickname } = updateUserDto;
    const user = { email, password, nickname };
    return this.usersRepository.update(user.email, user);
  }

  remove(email: string) {
    return this.usersRepository.remove(email);
  }
}
