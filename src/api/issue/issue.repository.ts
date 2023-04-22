import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from '@/api/issue/issue.entity';
import { User } from '@/api/user/user.entity';

@Injectable()
export class IssueRepository {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  async create(issue: Issue): Promise<Issue> {
    return this.issueRepository.save(issue);
  }

  async getIssueById(id: number): Promise<Issue | null> {
    return this.issueRepository.findOneBy({ id });
  }
}
