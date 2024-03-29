import { Body, Param, Query } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueRequest } from './dto/request/create-issue.request';
import { IssuesResponse } from './dto/response/issues.response';
import { Signature } from '@/global/decorator/signature';
import { IssueResponse } from '@/api/issue/dto/response/issue.response';
import { SuccessResponse } from '@/global/dto/success.response';
import { CreateResponse } from '@/global/dto/create.response';
import { IssuesRequest } from '@/api/issue/dto/request/issues.request';
import { ArtinfoController, ArtinfoDelete, ArtinfoGet, ArtinfoPost } from '@/global/decorator/rest-api';

@ArtinfoController('issue', 'Issue')
export class IssueController {
  constructor(
    private readonly issueService: IssueService, //
  ) {}

  @ArtinfoPost(CreateResponse, { path: '/', summary: '이슈 게시글 작성', auth: true })
  async createIssue(@Body() request: CreateIssueRequest, @Signature() signature) {
    const issueId = await this.issueService.createIssue(request.setUser(signature).toEntity());
    return CreateResponse.fromId(issueId);
  }

  @ArtinfoDelete(SuccessResponse, { path: '/:id([0-9]+)', summary: '이슈 게시글 삭제', auth: true })
  async deleteIssue(@Param('id') issueId: number, @Signature() signature) {
    const result = await this.issueService.deleteIssue(issueId, signature.id);
    return SuccessResponse.fromResult(result);
  }

  @ArtinfoGet(IssueResponse, { path: '/:id([0-9]+)', summary: '이슈 게시글 조회' })
  async getIssue(@Param('id') issueId: number) {
    const issue = await this.issueService.getIssueById(issueId);
    return IssueResponse.fromIssue(issue);
  }

  @ArtinfoGet(IssuesResponse, { path: '/issues', summary: '이슈 게시글 목록 조회' })
  async getIssues(@Query() request: IssuesRequest) {
    const issue = await this.issueService.getIssuesByType(request.type, request.countOfItems, request.lastItemId, request.keyword);
    const countOfTotal = await this.issueService.countIssues();
    return IssuesResponse.fromIssues(issue, countOfTotal);
  }
}
