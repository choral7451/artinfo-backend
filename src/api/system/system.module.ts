import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { SystemRepository } from '@/api/system/system.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from '@/api/system/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [SystemController],
  providers: [SystemService, SystemRepository],
})
export class SystemModule {}
