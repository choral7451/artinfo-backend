import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
  @ApiProperty({ required: true, description: 'Access 토큰' })
  private accessToken!: string;

  @ApiProperty({ required: true, description: 'Refresh 토큰' })
  private refreshToken!: string;

  static fromTokens({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }): LoginResponse {
    const response = new LoginResponse();
    response.accessToken = accessToken;
    response.refreshToken = refreshToken;

    return response;
  }
}
