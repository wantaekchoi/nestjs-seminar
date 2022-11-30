import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: '유저 이메일 주소',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    description: '유저 비밀번호',
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: '유저 닉네임',
  })
  @IsString()
  @IsOptional()
  nickname?: string;
}
