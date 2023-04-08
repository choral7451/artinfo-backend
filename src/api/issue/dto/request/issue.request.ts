import { ApiProperty } from '@nestjs/swagger';

export class IssueRequest {
  @ApiProperty({ required: true, description: '이슈 게시글 아이디', example: 1 })
  userId!: number;
}
