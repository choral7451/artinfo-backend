import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwagger } from './global/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  setSwagger(app);
  await app.listen(3001);
}
bootstrap();
