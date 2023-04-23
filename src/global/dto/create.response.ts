import { ApiProperty } from '@nestjs/swagger';

export class CreateResponse {
  @ApiProperty({ required: true, description: '생성 데이터 아이디', example: 1 })
  id: number;

  static fromId(id: number): CreateResponse {
    const response = new CreateResponse();
    response.id = id;
    return response;
  }
}
