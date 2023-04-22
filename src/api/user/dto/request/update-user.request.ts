import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequest {
  @ApiProperty({ required: false, description: '이름', example: '임성준' })
  name?: string;

  @ApiProperty({ required: false, description: '닉네임', example: '코랄' })
  nickname?: string;

  @ApiProperty({ required: false, description: '비밀번호', example: 'a123456!' })
  password?: string;

  @ApiProperty({ required: false, description: '유저 아이콘 이미지', example: 'www.sample.com' })
  iconImageUrl?: string;
}
