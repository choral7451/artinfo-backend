import { ApiProperty } from '@nestjs/swagger';
import { ICreateUserFields } from '@/api/user/dto/fields/create-user.fields';

export class CreateUserRequest {
  @ApiProperty({ required: true, description: '이름', example: '임성준' })
  private name!: string;

  @ApiProperty({ required: true, description: '닉네임', example: '코랄' })
  private nickname!: string;

  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  private email!: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  private password!: string;

  getCreateUserFields(): ICreateUserFields {
    return {
      name: this.name,
      nickname: this.nickname,
      email: this.email,
      password: this.password,
    };
  }
}