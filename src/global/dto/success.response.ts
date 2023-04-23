import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse {
  @ApiProperty({ required: true, description: '성공 여부', example: true })
  success: boolean;

  static fromResult(result: boolean): SuccessResponse {
    const response = new SuccessResponse();
    response.success = result;
    return response;
  }
}
