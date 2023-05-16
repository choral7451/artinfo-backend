import { ApiProperty } from '@nestjs/swagger';
import { User } from '@/api/user/user.entity';
import { Comment } from '@/api/comment/comment.entity';

export class CreateCommentRequest {
  user: User;

  @ApiProperty({ required: true, description: '게시글 아이디', example: 5 })
  postId!: number;

  @ApiProperty({ required: true, description: '댓글 내용', example: '댓글 내용입니다.' })
  contents!: string;

  @ApiProperty({ required: false, description: '부모 댓글 아이디', example: 5 })
  parentCommentId?: number;

  toEntity(): Comment {
    return Comment.create(this.contents, this.user, this.parentCommentId);
  }

  setUser(user: User): CreateCommentRequest {
    this.user = user;
    return this;
  }
}
