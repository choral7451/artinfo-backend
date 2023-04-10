import { Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { ArtinfoController, ArtinfoPost } from '../../global/decorator/rest-api';
import { SystemService } from './system.service';
import { FileUploadRequest } from './dto/request/file-upload.request';
import { MulterFile } from './dto/fields/multer-file.fields';

@ArtinfoController('system', 'System')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        fileName: {
          type: 'string',
          description: '파일 제목',
          nullable: false,
          example: 'sample',
        },
        file: {
          type: 'string',
          description: '업로드할 파일',
          nullable: false,
          format: 'binary',
        },
      },
    },
  })
  @ArtinfoPost({ path: '/upload', summary: '파일 업로드', auth: true })
  async uploadFile(@Body() body: FileUploadRequest, @UploadedFile() file: MulterFile): Promise<any> {
    console.log(body);
    const { fileName } = body;
    const result = await this.systemService.uploadFile(file, fileName);
    return { url: result.Location };
  }
}
