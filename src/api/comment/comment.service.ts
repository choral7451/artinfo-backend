import { Injectable } from '@nestjs/common';
import { CommentRepository } from '@/api/comment/comment.repository';
import { Comment } from '@/api/comment/comment.entity';
import { IssueService } from '@/api/issue/issue.service';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository, private readonly issueService: IssueService) {}

  async createComment(postId: number, comment: Comment): Promise<number> {
    comment.issue = await this.issueService.getIssueById(postId);
    return this.commentRepository.create(comment);
  }

  async getComments(postId: number): Promise<Comment[]> {
    return this.commentRepository.getComments(postId);
  }
}
