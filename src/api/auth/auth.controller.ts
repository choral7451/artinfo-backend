import { ArtinfoController, ArtinfoPost } from '@/global/decorator/rest-api';
import { Body } from '@nestjs/common';
import { LoginResponse } from '@/api/auth/dto/response/login.response';
import { AuthService } from '@/api/auth/auth.service';
import { LoginRequest } from '@/api/auth/dto/request/login.request';

@ArtinfoController('auth', 'Auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @ArtinfoPost({ path: '/login', summary: '로그인' })
  async login(@Body() request: LoginRequest): Promise<LoginResponse> {
    const tokens = await this.authService.login({ email: request.email, password: request.password });
    return LoginResponse.fromTokens({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
  }
}
