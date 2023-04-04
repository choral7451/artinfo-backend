import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  private _email!: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  private _password!: string;

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
