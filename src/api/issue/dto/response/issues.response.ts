import { ApiProperty } from '@nestjs/swagger';
import { IssueResponse } from './issue.response';
import { Issue } from '@/api/issue/issue.entity';

export class IssuesResponse {
  @ApiProperty({ required: true, description: '이슈 게시글 목록' })
  issues: IssueResponse[];

  @ApiProperty({ required: true, description: '총 게시글 수', example: 0 })
  countOfTotal: number;

  static fromIssues(issues: Issue[], countOfTotal: number): IssuesResponse {
    const response = new IssuesResponse();
    response.issues = issues.map(issue => IssueResponse.fromIssue(issue));
    response.countOfTotal = countOfTotal;

    return response;
  }
}
