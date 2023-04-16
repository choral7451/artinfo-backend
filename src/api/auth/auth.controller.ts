import { ArtinfoController } from '@/global/decorator/rest-api';

@ArtinfoController('auth', 'Auth')
export class AuthController {
  constructor() {}
  //
  // @ArtinfoPost({ path: '/login', summary: '로그인' })
  // async login(@Body() request: LoginRequest): Promise<LoginResponse> {
  //   const tokens = await this.authService.login({ email: request.email, password: request.password });
  //   return LoginResponse.fromTokens({ accessToken: tokens.accessToken, refreshToken: tokens.refreshToken });
  // }
}
