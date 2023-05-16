import { Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from '@/api/issue/issue.entity';
import { IssueFilterType } from '@/common/enum';

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
    if (!issue) {
      throw new HttpException('해당 게시글이 존재하지 않습니다.', 400);
    }

    return issue;
  }

  async getIssuesByType(type: IssueFilterType, countOfItems: number, lastItemId?: number, keyword?: string): Promise<Issue[]> {
    let where = {};

    if (type !== IssueFilterType.ALL) {
      where = { type };
    }

    let queryBuilder = this.issueRepository
      .createQueryBuilder('issue')
      .where(where)
      .limit(countOfItems)
      .leftJoinAndSelect('issue.user', 'user')
      .orderBy('issue.id', 'DESC');

    if (lastItemId !== undefined) {
      queryBuilder.andWhere('issue.id < :lastItemId', { lastItemId });
    }

    if (keyword !== undefined) {
      const keywordCondition = `(issue.title LIKE :keyword OR user.nickname LIKE :keyword)`;
      queryBuilder.andWhere(keywordCondition, { keyword: `%${keyword}%` });
    }

    return queryBuilder.getMany();
  }

  async count(): Promise<number> {
    return this.issueRepository.count();
  }

  async deleteById(id: number): Promise<boolean> {
    const result = await this.issueRepository.delete({ id });
    return result.affected !== 0;
  }
}
