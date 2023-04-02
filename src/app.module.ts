import { Module } from '@nestjs/common';
import { ApiModule } from '@/api/api.module';
import { DatabaseModule } from '@/database/database.module';
import { ConfigurationModule } from '@/config/config.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, ApiModule],
})
export class AppModule {}
