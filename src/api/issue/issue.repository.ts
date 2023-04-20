import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from '@/api/issue/issue.entity';

@Injectable()
export class IssueRepository {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  async createIssue(issue: Issue): Promise<Issue> {
    return this.issueRepository.save(issue);
  }
}
