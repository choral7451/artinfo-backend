export interface ICreateIssueFields {
  title: string;
  contents: string;
  user: { connect: { id: number } };
}
