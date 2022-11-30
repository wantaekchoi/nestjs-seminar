import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: '유저 이메일 주소',
  })
  email!: string;

  @ApiProperty({
    description: '유저 비밀번호',
  })
  password!: string;

  @ApiProperty({
    description: '유저 닉네임',
  })
  nickname: string;
}
