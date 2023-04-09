import { Injectable } from '@nestjs/common';
import { Issue, User } from '@prisma/client';
import { PrismaService } from '@/prisma.service';
import { ICreateIssueFields } from '@/api/issue/dto/fields/create-issue.fields';

@Injectable()
export class IssueService {
  constructor(
    private readonly prismaService: PrismaService, //
  ) {}

  async getIssueById(id: number): Promise<Issue & { user: User }> {
    const issue = await this.prismaService.issue.findUnique({
      where: { id: id },
      include: { user: true },
    });

    if (!issue) throw new Error('ISSUE_DOES_NOT_EXIST');

    return issue;
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
}
