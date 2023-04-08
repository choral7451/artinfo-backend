import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma.module';
import { IssueController } from '@/api/issue/issue.controller';
import { IssueService } from '@/api/issue/issue.service';

@Module({
  imports: [PrismaModule],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
