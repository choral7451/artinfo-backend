import { ApiProperty } from '@nestjs/swagger';
import { IssueType } from '@/common/enum';
import { User } from '@/api/user/user.entity';
import { Issue } from '@/api/issue/issue.entity';

export class CreateIssueRequest {
  user: User;

  @ApiProperty({ enum: IssueType, enumName: 'IssueType', required: true, description: '이슈 게시글 타입', example: IssueType.ISSUE })
  type!: IssueType;

  @ApiProperty({ required: true, description: '이슈 게시글 제목', example: '이슈가 있습니다.' })
  title!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 내용', example: '이슈 내용입니다.' })
  contents!: string;

  toEntity(): Issue {
    return Issue.create(this.title, this.type, this.contents, this.user);
  }

  setUser(user: User): CreateIssueRequest {
    this.user = user;
    return this;
  }
}
