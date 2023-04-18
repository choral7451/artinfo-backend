import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigurationModule } from './config/config.module';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@/global/logger/logger.module';

@Module({
  imports: [
    ApiModule,
    LoggerModule,
    ConfigurationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'artinfo',
      entities: [__dirname + '/api/**/*.entity.*'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
