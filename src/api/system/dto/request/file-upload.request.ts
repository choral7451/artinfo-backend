import { ApiProperty } from '@nestjs/swagger';
import { MulterFile } from '../fields/multer-file.fields';
import { FileTargetType } from '@/common/enum';

export class FileUploadRequest {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: MulterFile;

  @ApiProperty({ type: String, required: true, description: '파일 이름', example: 'sample' })
  fileName: string;

  @ApiProperty({ type: FileTargetType, required: true, description: '파일 타겟 유형 [ ISSUE | RECRUIT | USER_ICON ]', example: FileTargetType.RECRUIT })
  target: FileTargetType;

  targetId: string;

  setFile(file: MulterFile): FileUploadRequest {
    this.file = file;
    return this;
  }

  setTargetId(targetId: string): FileUploadRequest {
    this.targetId = targetId;
    return this;
  }
}
