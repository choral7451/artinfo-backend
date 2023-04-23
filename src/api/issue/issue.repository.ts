import { DeleteResult, Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from '@/api/issue/issue.entity';

@Injectable()
export class IssueRepository {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}

  async create(issue: Issue): Promise<number> {
    const result = await this.issueRepository.save(issue);
    return result.id;
  }

  async getIssueById(id: number): Promise<Issue> {
    const issue = await this.issueRepository.findOne({ where: { id }, relations: ['user'] });
    if (!issue) throw new HttpException('해당 게시글이 존재하지 않습니다.', 400);

    return issue;
  }

  async getIssues(): Promise<Issue[]> {
    return this.issueRepository.createQueryBuilder('issue').leftJoinAndSelect('issue.user', 'user').getMany();
  }

  async count(): Promise<number> {
    return this.issueRepository.count();
  }

  async deleteById(id: number): Promise<boolean> {
    const result = await this.issueRepository.delete({ id });
    return result.affected !== 0;
  }
}
