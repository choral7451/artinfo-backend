import { ApiProperty } from '@nestjs/swagger';

export class TokensResponse {
  @ApiProperty({ required: true, description: 'Access 토큰' })
  private accessToken!: string;

  @ApiProperty({ required: true, description: 'Refresh 토큰' })
  private refreshToken!: string;

  static fromTokens({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }): TokensResponse {
    const response = new TokensResponse();
    response.accessToken = accessToken;
    response.refreshToken = refreshToken;

    return response;
  }
}
