import { ApiProperty } from '@nestjs/swagger';
import { CommentResponse } from '@/api/comment/dto/response/comment.response';
import { Comment } from '@/api/comment/comment.entity';

export class CommentsResponse {
  @ApiProperty({ required: true, description: '댓글 목록' })
  comments: CommentResponse[];

  @ApiProperty({ required: true, description: '총 댓글 수', example: 0 })
  countOfTotal: number;

  static fromComments(comments: Comment[], countOfTotal: number): CommentsResponse {
    const response = new CommentsResponse();
    response.comments = comments.map(comment => CommentResponse.fromComment(comment));
    response.countOfTotal = countOfTotal;

    return response;
  }
}
