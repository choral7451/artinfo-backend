import { Injectable } from '@nestjs/common';
import { Issue, User } from '@prisma/client';
import { ICreateIssueFields } from './dto/fields/create-issue.fields';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class IssueService {
  constructor(
    private readonly prismaService: PrismaService, //
  ) {}

  async getIssueById(id: number): Promise<Issue & { user: User }> {
    const issue = await this.prismaService.issue.findUnique({
      where: { id: id },
    });

    if (!issue) throw new Error('ISSUE_DOES_NOT_EXIST');

    return this.prismaService.issue.update({
      where: { id },
      data: {
        countOfViews: issue.countOfViews + 1,
      },
      include: { user: true },
    });
  }

  async getIssues(): Promise<(Issue & { user: User })[]> {
    return this.prismaService.issue.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async countIssues(): Promise<number> {
    return this.prismaService.issue.count();
  }

  async createIssue(fields: ICreateIssueFields): Promise<Issue> {
    return this.prismaService.issue.create({ data: fields });
  }

  async deleteIssue(id: number): Promise<boolean> {
    const user = await this.prismaService.issue.delete({
      where: { id: id },
    });

    return !!user;
  }
}
