import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '@/global/decorator/rest-api';
import { Body, Param } from '@nestjs/common';
import { UserResponse } from '@/api/user/dto/response/user.response';
import { IssueService } from '@/api/issue/issue.service';
import { CreateIssueRequest } from '@/api/issue/dto/request/create-issue.request';
import { IssueRequest } from '@/api/issue/dto/request/issue.request';
import { IssueResponse } from '@/api/issue/dto/response/issue.response';

@ArtinfoController('issue', 'Issue')
export class IssueController {
  constructor(
    private readonly issueService: IssueService, //
  ) {}

  @ArtinfoPost('/', '이슈 게시글 작성')
  async createIssue(@Body() request: CreateIssueRequest) {
    return this.issueService.createIssue(request.getCreateIssueFields());
  }

  @ArtinfoGet('/:id', '이슈 게시글 조회')
  async getIssue(@Param('id') issueId: number) {
    const issue = await this.issueService.getIssueById(issueId);
    return IssueResponse.fromIssue(issue);
  }
}
