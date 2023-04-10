import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/config.module';
import { ApiModule } from './api/api.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ConfigurationModule, ApiModule, PrismaModule],
})
export class AppModule {}
