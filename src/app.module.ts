import { HttpException, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './all-exception-filter/all-exception.filter';

@Module({
  imports: [UsersModule, LoginModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
