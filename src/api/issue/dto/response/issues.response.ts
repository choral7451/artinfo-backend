import { ApiProperty } from '@nestjs/swagger';
import { IssueResponse } from './issue.response';

export class IssuesResponse {
  @ApiProperty({ required: true, description: '이슈 게시글 목록' })
  issues: IssueResponse[];

  @ApiProperty({ required: true, description: '총 게시글 수', example: 0 })
  countOfTotal: number;
}
