import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { IssueType } from '@/common/enum';
import { User } from '@/api/user/user.entity';
import { Comment } from '@/api/comment/comment.entity';

@Entity({ name: 'issues' })
export class Issue {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  type: IssueType;

  @Column({ type: 'text' })
  contents: string;

  @Column({ name: 'count_of_views', default: 0 })
  countOfViews: number;

  @ManyToOne(() => User, user => user.issues)
  user: User;

  @OneToMany(() => Comment, comment => comment.issue)
  comments: Comment[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static create(title: string, type: IssueType, contents: string, user: User): Issue {
    const issue = new Issue();
    issue.title = title;
    issue.type = type;
    issue.contents = contents;
    issue.user = user;

    return issue;
  }
}
