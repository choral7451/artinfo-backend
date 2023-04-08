import { ApiProperty } from '@nestjs/swagger';
import { IssueBoard } from '@prisma/client';

export class IssueResponse {
  @ApiProperty({ required: true, description: '게시글 아이디', example: 1 })
  id!: number;

  @ApiProperty({ required: true, description: '작성자 이름', example: 'daniel' })
  authorUserNickname!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 제목', example: '이슈가 있습니다.' })
  title!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 내용', example: '이슈 내용입니다.' })
  contents!: string;

  @ApiProperty({ required: true, description: '게시글 조회수', example: 3 })
  countOfViews!: number;

  @ApiProperty({ required: true, description: '게시글 작성 일시', example: new Date() })
  createdAt!: Date;

  static fromIssue(issue: any): IssueResponse {
    const response = new IssueResponse();
    response.id = issue.id;
    response.authorUserNickname = issue.user.name;
    response.title = issue.title;
    response.contents = issue.contents;
    response.countOfViews = issue.countOfViews;
    response.createdAt = issue.createdAt;

    return response;
  }
}
