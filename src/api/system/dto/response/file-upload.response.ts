import { ApiProperty } from '@nestjs/swagger';

export class FileUploadResponse {
  @ApiProperty({ required: true, description: '이미지 주소', example: 'https://www.sample.com' })
  url: string;

  static fromUrl(url: string): FileUploadResponse {
    const response = new FileUploadResponse();
    response.url = url;
    return response;
  }
}
