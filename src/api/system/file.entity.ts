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
  targetId: number;

  @Column({ name: 'mime_type' })
  mimeType: string;

  @Column()
  size: number;

  @Column({ default: FileStatus.UNUSED })
  status: FileStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static create(fileName: string, url: string, target: FileTargetType, targetId: number, mimeType: string, size: number): File {
    const file = new File();
    file.fileName = fileName;
    file.url = url;
    file.target = target;
    file.targetId = targetId;
    file.mimeType = mimeType;
    file.size = size;

    return file;
  }
}
