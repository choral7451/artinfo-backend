import { ApiProperty } from '@nestjs/swagger';
import { User } from '@/api/user/user.entity';

export class CreateUserRequest {
  @ApiProperty({ required: true, description: '이름', example: '임성준' })
  name!: string;

  @ApiProperty({ required: true, description: '닉네임', example: '코랄' })
  nickname!: string;

  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  email!: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  password!: string;

  toEntity(): User {
    return User.create(this.email, this.name, this.nickname, this.password);
  }
}
