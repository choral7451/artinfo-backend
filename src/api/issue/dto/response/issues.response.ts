import { ApiProperty } from '@nestjs/swagger';
import { Issue, User } from '@prisma/client';
import { IssueResponse } from './issue.response';

export class IssuesResponse {
  @ApiProperty({ required: true, description: '이슈 게시글 목록' })
  issues: IssueResponse[];

  @ApiProperty({ required: true, description: '총 게시글 수', example: 0 })
  countOfTotal: number;

  static fromIssues(issues: (Issue & { user: User })[], countOfTotal: number): IssuesResponse {
    const response = new IssuesResponse();
    response.issues = issues.map(issue => IssueResponse.fromIssue(issue));
    response.countOfTotal = countOfTotal;

    return response;
  }
}
