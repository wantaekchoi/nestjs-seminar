import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { InMemoryRepositoryModule } from '../in-memory-repository/in-memory-repository.module';

@Module({
  imports: [InMemoryRepositoryModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
