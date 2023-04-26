import { ApiProperty } from '@nestjs/swagger';
import { MulterFile } from '../fields/multer-file.fields';
import { FileTargetType } from '@/common/enum';
import { User } from '@/api/user/user.entity';
import { File } from '@/api/system/file.entity';

export class FileUploadRequest {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: MulterFile;

  @ApiProperty({ type: String, required: true, description: '파일 이름', example: 'sample' })
  fileName: string;

  @ApiProperty({ type: FileTargetType, required: true, description: '파일 타겟 유형 [ ISSUE | RECRUIT | USER_ICON ]', example: FileTargetType.RECRUIT })
  target: FileTargetType;

  targetId: number;
  url: string;

  setFile(file: MulterFile): FileUploadRequest {
    this.file = file;
    return this;
  }

  setTargetId(targetId: number): FileUploadRequest {
    this.targetId = targetId;
    return this;
  }

  setUrl(url: string): FileUploadRequest {
    this.url = url;
    return this;
  }

  toEntity(): File {
    return File.create(this.fileName, this.url, this.target, this.targetId, this.file.mimetype, this.file.size);
  }
}
