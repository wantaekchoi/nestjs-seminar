import { Injectable } from '@nestjs/common';
import { User } from '../users/entity/user';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';

@Injectable()
export class UsersRepository {
  private readonly _users: UserEntity[] = [];

  constructor() {
    this.create({
      email: 'wtchoi@raoncorp.com',
      password: '1234',
      nickname: '최완택',
    });
  }

  create(user: User): UserEntity {
    const entity = UserMapper.domainToEntity(this._users.length, user);
    this._users.push(entity);
    return entity;
  }

  findAll(): UserEntity[] {
    return this._users.filter((entity) => !entity.removed);
  }

  findOne(email: string): UserEntity | undefined {
    return this._users
      .filter((entity) => !entity.removed)
      .find((entity) => entity.email == email);
  }

  update(
    email: string,
    options: { password?: string; nickname?: string },
  ): 0 | 1 {
    const entity = this.findOne(email);
    if (!entity) return 0;
    const { password, nickname } = options;
    if (password) entity.password = password;
    if (nickname) entity.nickname = nickname;
    return 1;
  }

  remove(email: string): 0 | 1 {
    const entity = this.findOne(email);
    if (!entity) return 0;
    entity.remove();
    return 1;
  }
}
