import { Body, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { ArtinfoController, ArtinfoDelete, ArtinfoGet, ArtinfoPost } from '../../global/decorator/rest-api';
import { IssueService } from './issue.service';
import { CreateIssueRequest } from './dto/request/create-issue.request';
import { IssueDetailResponse } from './dto/response/issueDetailResponse';
import { IssuesResponse } from './dto/response/issues.response';
import { JwtAuthGuard } from '@/api/auth/security/jwt-auth.guard';
import { Signature } from '@/global/decorator/signature';

@ArtinfoController('issue', 'Issue')
export class IssueController {
  // constructor(
  //   private readonly issueService: IssueService, //
  // ) {}
  //
  // @UseGuards(JwtAuthGuard)
  // @ArtinfoPost({ path: '/', summary: '이슈 게시글 작성', auth: true })
  // async createIssue(@Body() request: CreateIssueRequest, @Signature() signature) {
  //   return this.issueService.createIssue(request.setUserId(signature.id).getCreateIssueFields());
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @ArtinfoDelete({ path: '/:id([0-9])', summary: '이슈 게시글 삭제', auth: true })
  // async deleteIssue(@Param('id') issueId: number, @Signature() signature) {
  //   return this.issueService.deleteIssue(issueId);
  // }
  //
  // @ArtinfoGet({ path: '/:id([0-9])', summary: '이슈 게시글 조회' })
  // async getIssue(@Param('id') issueId: number) {
  //   try {
  //     console.log(issueId);
  //     const issue = await this.issueService.getIssueById(issueId);
  //     return ArtinfoResponse.OK_WITH(IssueDetailResponse.fromIssue(issue));
  //   } catch (e) {
  //     return ArtinfoResponse.ERROR_WITH(`${issueId}번 이슈 게시글 조회에 실패하였습니다.`);
  //   }
  // }
  //
  // @ArtinfoGet({ path: '/issues', summary: '이슈 게시글 목록 조회' })
  // async getIssues() {
  //   const issue = await this.issueService.getIssues();
  //   const countOfTotal = await this.issueService.countIssues();
  //   return ArtinfoResponse.OK_WITH(IssuesResponse.fromIssues(issue, countOfTotal));
  // }
}
