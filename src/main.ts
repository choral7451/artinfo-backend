import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwagger } from './global/swagger/swagger';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@/global/serializer/http-exception-filter';
import { TransformResponseInterceptor } from '@/global/serializer/response-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformResponseInterceptor());
  app.enableCors();
  setSwagger(app);
  await app.listen(3001);
}
bootstrap();
