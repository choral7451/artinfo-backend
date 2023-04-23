import { Injectable } from '@nestjs/common';
import { IssueRepository } from '@/api/issue/issue.repository';
import { Issue } from '@/api/issue/issue.entity';

@Injectable()
export class IssueService {
  constructor(private readonly issueRepository: IssueRepository) {}

  async getIssueById(id: number): Promise<Issue> {
    return this.issueRepository.getIssueById(id);
  }

  async getIssues(): Promise<Issue[]> {
    return this.issueRepository.getIssues();
  }

  async countIssues(): Promise<number> {
    return this.issueRepository.count();
  }

  async createIssue(issue: Issue): Promise<number> {
    return this.issueRepository.create(issue);
  }

  async deleteIssue(id: number): Promise<boolean> {
    return this.issueRepository.deleteById(id);
  }
}
