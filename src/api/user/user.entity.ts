import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Issue } from '@/api/issue/issue.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column({ name: 'icon_image_url', nullable: true })
  iconImageUrl: string;

  @OneToMany(() => Issue, issue => issue.user)
  issues: Issue[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static create(email: string, name: string, nickname: string, password: string): User {
    const user = new User();
    user.email = email;
    user.name = name;
    user.nickname = nickname;
    user.password = password;

    return user;
  }
}
