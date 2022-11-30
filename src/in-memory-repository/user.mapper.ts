import { User } from '../users/entity/user';
import { UserEntity } from './user.entity';

export class UserMapper {
  static domainToEntity(primaryKey: number, user: User): UserEntity {
    return new UserEntity(
      primaryKey,
      user.email,
      user.password,
      user.nickname,
      false,
    );
  }

  static entityToDomain(entity: UserEntity): User {
    const { email, password, nickname } = entity;
    return { email, password, nickname };
  }
}
