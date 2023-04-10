import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { MulterFile } from './dto/fields/multer-file.fields';

@Injectable()
export class SystemService {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async uploadFile(file: MulterFile, filename: string): Promise<S3.ManagedUpload.SendData> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: filename,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    return await this.s3.upload(params).promise();
  }
}
