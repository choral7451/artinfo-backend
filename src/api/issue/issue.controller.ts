import { Body, Param } from '@nestjs/common';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '../../global/decorator/rest-api';
import { IssueService } from './issue.service';
import { CreateIssueRequest } from './dto/request/create-issue.request';
import { IssueDetailResponse } from './dto/response/issueDetailResponse';
import { IssuesResponse } from './dto/response/issues.response';

@ArtinfoController('issue', 'Issue')
export class IssueController {
  constructor(
    private readonly issueService: IssueService, //
  ) {}

  @ArtinfoPost({ path: '/', summary: '이슈 게시글 작성' })
  async createIssue(@Body() request: CreateIssueRequest) {
    return this.issueService.createIssue(request.getCreateIssueFields());
  }

  @ArtinfoGet({ path: '/:id([0-9])', summary: '이슈 게시글 조회' })
  async getIssue(@Param('id') issueId: number) {
    const issue = await this.issueService.getIssueById(issueId);
    return IssueDetailResponse.fromIssue(issue);
  }

  @ArtinfoGet({ path: '/issues', summary: '이슈 게시글 목록 조회' })
  async getIssues() {
    const issue = await this.issueService.getIssues();
    const countOfTotal = await this.issueService.countIssues();
    return IssuesResponse.fromIssues(issue, countOfTotal);
  }
}
