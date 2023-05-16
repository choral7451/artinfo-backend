import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '@/api/user/user.entity';
import { Issue } from '@/api/issue/issue.entity';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  parentCommentId?: number;

  @Column({ type: 'text' })
  contents: string;

  @ManyToOne(() => Issue, issue => issue.comments)
  issue: Issue;

  @ManyToOne(() => User, user => user.issues)
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static create(contents: string, user: User, parentCommentId?: number): Comment {
    const comment = new Comment();
    comment.contents = contents;
    comment.user = user;
    comment.parentCommentId = parentCommentId;

    return comment;
  }
}
