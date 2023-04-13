import { IssueType } from '@/common/enum';

export interface ICreateIssueFields {
  title: string;
  contents: string;
  type: IssueType;
  user: { connect: { id: number } };
}
