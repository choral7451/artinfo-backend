import { Body, Param, UseGuards } from '@nestjs/common';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '../../global/decorator/rest-api';
import { IssueService } from './issue.service';
import { CreateIssueRequest } from './dto/request/create-issue.request';
import { IssueDetailResponse } from './dto/response/issueDetailResponse';
import { IssuesResponse } from './dto/response/issues.response';
import { JwtAuthGuard } from '@/api/auth/security/jwt-auth.guard';
import { Signature } from '@/global/decorator/signature';

@ArtinfoController('issue', 'Issue')
export class IssueController {
  constructor(
    private readonly issueService: IssueService, //
  ) {}

  @UseGuards(JwtAuthGuard)
  @ArtinfoPost({ path: '/', summary: '이슈 게시글 작성', auth: true })
  async createIssue(@Body() request: CreateIssueRequest, @Signature() signature) {
    return this.issueService.createIssue(request.setUserId(signature.id).getCreateIssueFields());
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
