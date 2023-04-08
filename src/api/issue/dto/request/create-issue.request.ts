import { ApiProperty } from '@nestjs/swagger';
import { ICreateIssueFields } from '@/api/issue/dto/fields/create-issue.fields';

export class CreateIssueRequest {
  @ApiProperty({ required: true, description: '사용자 아이디', example: 1 })
  userId!: number;

  @ApiProperty({ required: true, description: '이슈 게시글 제목', example: '이슈가 있습니다.' })
  title!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 내용', example: '이슈 내용입니다.' })
  contents!: string;

  getCreateIssueFields(): ICreateIssueFields {
    return {
      title: this.title,
      contents: this.contents,
      user: { connect: { id: this.userId } },
    };
  }
}
