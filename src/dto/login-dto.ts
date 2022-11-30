import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '유저 이메일 주소',
    default: 'wtchoi@raoncorp.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: '유저 비밀번호',
    default: '1234',
  })
  @IsString()
  password!: string;
}
