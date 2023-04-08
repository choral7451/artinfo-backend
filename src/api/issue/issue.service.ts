import { Injectable } from '@nestjs/common';
import { IssueBoard, User } from '@prisma/client';
import { PrismaService } from '@/prisma.service';
import { ICreateIssueFields } from '@/api/issue/dto/fields/create-issue.fields';

@Injectable()
export class IssueService {
  constructor(
    private readonly prismaService: PrismaService, //
  ) {}

  async getIssueById(id: number): Promise<IssueBoard | null> {
    return this.prismaService.issueBoard.findUnique({
      where: { id: id },
      include: {
        user: true,
      },
    });
  }

  async createIssue(fields: ICreateIssueFields): Promise<IssueBoard> {
    return this.prismaService.issueBoard.create({ data: fields });
  }
}
