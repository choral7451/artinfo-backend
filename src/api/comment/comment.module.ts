import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from '@/api/comment/comment.entity';
import { CommentController } from '@/api/comment/comment.controller';
import { CommentService } from '@/api/comment/comment.service';
import { CommentRepository } from '@/api/comment/comment.repository';
import { IssueService } from '@/api/issue/issue.service';
import { IssueRepository } from '@/api/issue/issue.repository';
import { Issue } from '@/api/issue/issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Issue])],
  controllers: [CommentController],
  providers: [CommentService, IssueService, CommentRepository, IssueRepository],
})
export class CommentModule {}
