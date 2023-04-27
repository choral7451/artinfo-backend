import { Body, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ArtinfoController, ArtinfoPost } from '../../global/decorator/rest-api';
import { SystemService } from './system.service';
import { FileUploadRequest } from './dto/request/file-upload.request';
import { MulterFile } from './dto/fields/multer-file.fields';
import { Signature } from '@/global/decorator/signature';
import { FileUploadResponse } from '@/api/system/dto/response/file-upload.response';

@ArtinfoController('system', 'System')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          description: '업로드할 파일',
          nullable: false,
          format: 'binary',
        },
        fileName: {
          type: 'string',
          description: '파일 제목',
          nullable: false,
          example: 'sample',
        },
        target: {
          type: 'string',
          description: '파일 타겟 [ ISSUE | RECRUIT | USER_ICON ]',
          nullable: false,
          example: 'USER_ICON',
        },
      },
    },
  })
  @ArtinfoPost(FileUploadResponse, { path: '/upload', summary: '파일 업로드', auth: true })
  async uploadFile(@Body() request: FileUploadRequest, @UploadedFile() file: MulterFile, @Signature() signature): Promise<any> {
    const url = await this.systemService.uploadFile(request.setTargetId(signature.id).setFile(file));
    return FileUploadResponse.fromUrl(url);
  }
}
