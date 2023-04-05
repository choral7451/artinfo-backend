import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  email!: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  password!: string;
}
