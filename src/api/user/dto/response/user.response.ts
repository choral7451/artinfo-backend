import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserResponse {
  @ApiProperty({ required: true, description: '이름', example: '임성준' })
  private name!: string;

  @ApiProperty({ required: true, description: '닉네임', example: '코랄' })
  private nickname!: string;

  @ApiProperty({ required: true, description: '이메일', example: 'artinfokorea2022@gmail.com' })
  private email!: string;

  @ApiProperty({ required: false, description: '유저 아이콘 이미지 주소', example: 'www.sample.com' })
  private iconImageUrl?: string;

  static fromUser(user: User): UserResponse {
    const response = new UserResponse();
    response.name = user.name;
    response.nickname = user.nickname;
    response.email = user.email;
    response.iconImageUrl = user.iconImageUrl ?? undefined;
    return response;
  }
}
