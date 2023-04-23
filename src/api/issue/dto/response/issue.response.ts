import { ApiProperty } from '@nestjs/swagger';
import { IssueType } from '@/common/enum';
import { Issue } from '@/api/issue/issue.entity';

export class IssueResponse {
  @ApiProperty({ required: true, description: '게시글 아이디', example: 1 })
  id!: number;

  @ApiProperty({ required: true, description: '작성자 이름', example: IssueType.ISSUE })
  type!: IssueType;

  @ApiProperty({ required: true, description: '작성자 이름', example: 'daniel' })
  authorUserNickname!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 제목', example: '이슈가 있습니다.' })
  title!: string;

  @ApiProperty({ required: true, description: '게시글 조회수', example: 3 })
  countOfViews!: number;

  @ApiProperty({ required: true, description: '게시글 작성 일시', example: new Date() })
  createdAt!: Date;

  static fromIssue(issue: Issue): IssueResponse {
    const response = new IssueResponse();
    response.id = issue.id;
    response.type = issue.type;
    response.authorUserNickname = issue.user.nickname;
    response.title = issue.title;
    response.countOfViews = issue.countOfViews;
    response.createdAt = issue.createdAt;

    return response;
  }
}
