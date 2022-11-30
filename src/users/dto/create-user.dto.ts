import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
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
  @IsNotEmpty()
  @IsString()
  password!: string;

  @ApiProperty({
    description: '유저 닉네임',
    default: '최완택',
  })
  @IsString()
  @IsOptional()
  nickname?: string;
}
