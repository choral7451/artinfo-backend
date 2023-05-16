import { ApiProperty } from '@nestjs/swagger';
import { IssueFilterType, IssueType } from '@/common/enum';

export class IssuesRequest {
  @ApiProperty({ enum: IssueFilterType, enumName: 'IssueFilterType', required: true, example: IssueType.ISSUE })
  type!: IssueFilterType;

  @ApiProperty({ required: true, description: '아이템 조회 개수', example: 5 })
  countOfItems!: number;

  @ApiProperty({ required: false, description: '이전 조회 아이템 목록 마지막 아이템 아이디', example: 5 })
  lastItemId?: number;

  @ApiProperty({ required: false, description: '조회 키워드', example: '안녕?' })
  keyword?: string;
}
