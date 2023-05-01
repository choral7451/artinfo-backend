import { ApiProperty } from '@nestjs/swagger';
import { IssueFilterType, IssueType } from '@/common/enum';

export class IssuesRequest {
  @ApiProperty({ enum: IssueFilterType, enumName: 'IssueFilterType', required: true, example: IssueType.ISSUE })
  type!: IssueFilterType;
}
