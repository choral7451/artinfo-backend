import { Body, Param } from '@nestjs/common';
import { Signature } from '@/global/decorator/signature';
import { CreateResponse } from '@/global/dto/create.response';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '@/global/decorator/rest-api';
import { CreateCommentRequest } from '@/api/comment/dto/request/create-comment.request';
import { CommentService } from '@/api/comment/comment.service';
import { IssuesResponse } from '@/api/issue/dto/response/issues.response';
import { CommentsResponse } from '@/api/comment/dto/response/comments.response';
import { CommentsRequest } from '@/api/comment/dto/request/comments.request';

@ArtinfoController('comment', 'Comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ArtinfoPost(CreateResponse, { path: '/', summary: '댓글 작성', auth: true })
  async createIssue(@Body() request: CreateCommentRequest, @Signature() signature) {
    const commentId = await this.commentService.createComment(request.postId, request.setUser(signature).toEntity());
    return CreateResponse.fromId(commentId);
  }

  @ArtinfoGet(CommentsResponse, { path: '/comments/:postId([0-9]+)', summary: '댓글 목록 조회' })
  async getComments(@Param('postId') postId: number) {
    const comments = await this.commentService.getComments(postId);
    return CommentsResponse.fromComments(comments, 20);
  }
}
