import { ApiProperty } from '@nestjs/swagger';

export class FileUploadRequest {
  // @ApiProperty({ type: 'string', format: 'binary' })
  // file: MulterFile;

  @ApiProperty({ type: String })
  fileName: string;
}
