import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IssueType } from '@/common/enum';
import { User } from '@/api/user/user.entity';

@Entity({ name: 'issues' })
export class Issue {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  type: IssueType;

  @Column()
  contents: string;

  @Column({ name: 'count_of_views' })
  countOfViews: number;

  @ManyToOne(() => User, user => user.issues)
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
