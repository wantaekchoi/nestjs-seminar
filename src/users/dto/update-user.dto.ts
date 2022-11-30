import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: '유저 이메일 주소',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: '유저 비밀번호',
  })
  @IsString()
  password?: string;

  @ApiProperty({
    description: '유저 닉네임',
  })
  @IsString()
  nickname?: string;
}
