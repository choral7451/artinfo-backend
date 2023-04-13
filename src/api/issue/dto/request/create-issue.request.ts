import { ApiProperty } from '@nestjs/swagger';
import { ICreateIssueFields } from '../fields/create-issue.fields';
import { IssueType } from '@/common/enum';

export class CreateIssueRequest {
  userId!: number;

  @ApiProperty({ required: true, description: '이슈 게시글 타입', example: IssueType.ISSUE })
  type!: IssueType;

  @ApiProperty({ required: true, description: '이슈 게시글 제목', example: '이슈가 있습니다.' })
  title!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 내용', example: '이슈 내용입니다.' })
  contents!: string;

  getCreateIssueFields(): ICreateIssueFields {
    return {
      title: this.title,
      type: this.type,
      contents: this.contents,
      user: { connect: { id: this.userId } },
    };
  }

  setUserId(userId: number): CreateIssueRequest {
    this.userId = userId;
    return this;
  }
}
