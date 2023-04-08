import { Module } from '@nestjs/common';
import { ApiModule } from '@/api/api.module';
import { ConfigurationModule } from '@/config/config.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ConfigurationModule, ApiModule, PrismaModule],
})
export class AppModule {}
