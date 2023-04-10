import { Body } from '@nestjs/common';
import { ArtinfoController, ArtinfoPost } from '../../global/decorator/rest-api';
import { AuthService } from './auth.service';
import { LoginRequest } from './dto/request/login.request';
import { LoginResponse } from './dto/response/login.response';

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
