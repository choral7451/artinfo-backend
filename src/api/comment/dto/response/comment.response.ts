import { ApiProperty } from '@nestjs/swagger';
import { Issue } from '@/api/issue/issue.entity';
import { Comment } from '@/api/comment/comment.entity';

export class CommentResponse {
  @ApiProperty({ required: true, description: '댓글 아이디', example: 1 })
  id!: number;

  @ApiProperty({ required: false, description: '작성자 아이콘 이미지', example: 'https://www.sample.com' })
  userIconImageUrl?: string;

  @ApiProperty({ required: true, description: '작성자 닉네임', example: 'daniel' })
  userNickname!: string;

  @ApiProperty({ required: true, description: '이슈 게시글 내용', example: '이슈가 있습니다.' })
  contents?: string;

  @ApiProperty({ required: true, description: '게시글 작성 일시', example: new Date() })
  createdAt!: Date;

  static fromComment(comment: Comment): CommentResponse {
    const response = new CommentResponse();
    response.id = comment.id;
    response.userIconImageUrl = comment.user.iconImageUrl;
    response.userNickname = comment.user.nickname;
    response.contents = comment.contents;
    response.createdAt = comment.createdAt;

    return response;
  }
}
