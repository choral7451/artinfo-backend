import { ArtinfoController, ArtinfoPost } from '@/global/decorator/rest-api';
import { Body, HttpException, Req } from '@nestjs/common';
import { LoginRequest } from '@/api/auth/dto/request/login.request';
import { TokensResponse } from '@/api/auth/dto/response/tokensResponse';
import { AuthService } from '@/api/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';

@ArtinfoController('auth', 'Auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @ArtinfoPost(TokensResponse, { path: '/login', summary: '로그인' })
  async login(@Body() request: LoginRequest): Promise<TokensResponse> {
    const tokens = await this.authService.login({ email: request.email, password: request.password });
    return TokensResponse.fromTokens({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
  }

  @ArtinfoPost(TokensResponse, { path: '/tokens/refresh', summary: 'token 갱신' })
  async refreshTokens(@Req() request): Promise<TokensResponse> {
    try {
      const accessToken = request.headers.authorization && request.headers.authorization.replace('Bearer ', '');
      const refreshToken = request.cookies['refreshToken'];

      this.jwtService.verify(refreshToken, { secret: process.env.JWT_TOKEN_KEY });
      const sign = jwt.decode(accessToken);

      let tokens;
      if (sign) tokens = await this.authService.restoreTokens(sign['id']);

      return TokensResponse.fromTokens({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
    } catch (e) {
      throw new HttpException('해당 접근에 권한이 필요합니다.', 400);
    }
  }
}
