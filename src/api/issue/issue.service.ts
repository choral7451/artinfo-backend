import { Injectable } from '@nestjs/common';
import { IssueRepository } from '@/api/issue/issue.repository';
import { Issue } from '@/api/issue/issue.entity';

@Injectable()
export class IssueService {
  constructor(private readonly issueRepository: IssueRepository) {}

  // async getIssueById(id: number): Promise<Issue> {
  //   const issue = await this.issueRepository.getIssueById(id);
  //
  //   if (!issue) throw new Error('ISSUE_DOES_NOT_EXIST');
  //
  //   return this.prismaService.issue.update({
  //     where: { id },
  //     data: {
  //       countOfViews: issue.countOfViews + 1,
  //     },
  //     include: { user: true },
  //   });
  // }
  //
  // async getIssues(): Promise<(Issue & { user: User })[]> {
  //   return this.prismaService.issue.findMany({
  //     include: { user: true },
  //     orderBy: { createdAt: 'desc' },
  //   });
  // }
  //
  // async countIssues(): Promise<number> {
  //   return this.prismaService.issue.count();
  // }
  //
  async createIssue(issue: Issue): Promise<Issue> {
    return this.issueRepository.create(issue);
  }
  //
  // async deleteIssue(id: number): Promise<boolean> {
  //   const user = await this.prismaService.issue.delete({
  //     where: { id: id },
  //   });
  //
  //   return !!user;
  // }
}
