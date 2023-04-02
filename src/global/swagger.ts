import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setSwagger(app: INestApplication): void {
  const options = new DocumentBuilder().setTitle('Artinfo API Docs').setVersion('1.0.0').build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
