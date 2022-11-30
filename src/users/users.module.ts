import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepositoryModule } from '../user-repository/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
