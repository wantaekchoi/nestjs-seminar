import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserRepositoryModule } from '../user-repository/user-repository.module';

@Module({
  imports: [UserRepositoryModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
