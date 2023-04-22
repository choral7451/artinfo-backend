import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { IssueRepository } from '@/api/issue/issue.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Issue } from '@/api/issue/issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issue])],
  controllers: [IssueController],
  providers: [IssueService, IssueRepository],
})
export class IssueModule {}
