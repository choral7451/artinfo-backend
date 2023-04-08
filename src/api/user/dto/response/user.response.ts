import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserResponse {
  @ApiProperty({ required: true, description: '이름', example: '임성준' })
  private name!: string;

  @ApiProperty({ required: true, description: '닉네임', example: '코랄' })
  private nickname!: string;

  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  private email!: string;

  static fromUser(user: User): UserResponse {
    const response = new UserResponse();
    response.name = user.name;
    response.nickname = user.nickname;
    response.email = user.email;
    return response;
  }
}
