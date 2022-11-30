import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InMemoryRepositoryModule } from '../in-memory-repository/in-memory-repository.module';

@Module({
  imports: [InMemoryRepositoryModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
