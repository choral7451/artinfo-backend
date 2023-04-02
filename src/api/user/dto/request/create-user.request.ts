import { ApiProperty } from '@nestjs/swagger';
import { User } from '@/api/user/entities/user.entity';

export class CreateUserRequest {
  @ApiProperty({ required: true, description: '이름', example: '임성준' })
  private name!: string;

  @ApiProperty({ required: true, description: '닉네임', example: '코랄' })
  private nickname!: string;

  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  private email!: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  private password?: string;

  toEntity(): User {
    return User.from({
      name: this.name,
      nickname: this.nickname,
      email: this.email,
      password: this.getPassword,
    });
  }

  get getPassword(): string | undefined {
    return this.password;
  }

  set setPassword(value: string) {
    this.password = value;
  }
}
