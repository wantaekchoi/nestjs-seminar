import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '유저 이메일 주소',
    default: 'wtchoi@raoncorp.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    description: '유저 비밀번호',
    default: '1234',
  })
  @IsString()
  @IsNotEmpty()
  password!: string;
}
