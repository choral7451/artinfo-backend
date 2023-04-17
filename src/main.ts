import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwagger } from './global/swagger/swagger';
import { setNestApp } from '@/global/serializer/serializer';
import { winstonLogger } from '@/global/logger/winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });
  app.enableCors();
  setSwagger(app);
  setNestApp(app);
  await app.listen(3001);
}
bootstrap();
