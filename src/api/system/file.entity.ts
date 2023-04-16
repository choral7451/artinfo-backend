import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FileStatus, FileTargetType } from '@/common/enum';

@Entity({ name: 'files' })
export class File {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'url' })
  url: string;

  @Column()
  target: FileTargetType;

  @Column({ name: 'target_id' })
  targetId: string;

  @Column({ name: 'mime_type' })
  mimeType: string;

  @Column()
  size: number;

  @Column()
  status: FileStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
