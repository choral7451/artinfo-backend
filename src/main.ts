import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwagger } from './global/swagger/swagger';
import { setNestApp } from '@/global/serializer/serializer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  setSwagger(app);
  setNestApp(app);
  await app.listen(3001);
}
bootstrap();
