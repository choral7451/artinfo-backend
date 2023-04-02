import { ArtinfoController, ArtinfoPost } from '@/global/decorator/rest-api';

@ArtinfoController('auth', 'Auth')
export class AuthController {
  @ArtinfoPost('/login', '로그인')
  async login() {}
}
