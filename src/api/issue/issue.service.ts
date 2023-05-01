import { HttpException, Injectable } from '@nestjs/common';
import { IssueRepository } from '@/api/issue/issue.repository';
import { Issue } from '@/api/issue/issue.entity';
import { IssueFilterType } from '@/common/enum';

@Injectable()
export class IssueService {
  constructor(private readonly issueRepository: IssueRepository) {}

  async getIssueById(id: number): Promise<Issue> {
    return this.issueRepository.getIssueById(id);
  }

  async getIssuesByType(type: IssueFilterType): Promise<Issue[]> {
    return this.issueRepository.getIssuesByType(type);
  }

  async countIssues(): Promise<number> {
    return this.issueRepository.count();
  }

  async createIssue(issue: Issue): Promise<number> {
    return this.issueRepository.create(issue);
  }

  async deleteIssue(issueId: number, userId: number): Promise<boolean> {
    const issue = await this.getIssueById(issueId);
    if (issue.user.id !== userId) throw new HttpException('해당 접근에 권한이 필요합니다.', 400);

    return this.issueRepository.deleteById(issueId);
  }
}
