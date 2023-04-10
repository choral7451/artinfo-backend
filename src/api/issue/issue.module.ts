import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../prisma/prisma.module';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';

@Module({
  imports: [PrismaModule],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
