import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { FileUploadRequest } from './dto/request/file-upload.request';
import { ICreateFileFields } from './dto/fields/create-file.fields';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class SystemService {
  private s3: S3;

  constructor(
    private readonly prismaService: PrismaService, //
  ) {
    this.s3 = new S3({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(request: FileUploadRequest): Promise<string> {
    const key = `${request.targetId}/${request.target}/${request.fileName}_${Date.now()}`;
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: key,
      Body: request.file.buffer,
      ContentType: request.file.mimetype,
    };
    const result = await this.s3.upload(params).promise();

    const fields: ICreateFileFields = {
      fileName: request.fileName,
      url: decodeURIComponent(result.Location),
      target: request.target,
      targetId: request.targetId,
      mimeType: request.file.mimetype,
      size: request.file.size,
    };

    await this.prismaService.file.create({ data: fields });

    return result.Location;
  }
}
