import { Injectable } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';

@Injectable()
export class AuthService {
  // constructor(private readonly userService: UserService) {}
  // async login({ email, password }: { email: string; password: string }): Promise<{ accessToken: string; refreshToken: string }> {
  //   const user = await this.userService.getUserByEmail(email);
  //
  //   if (user.password) {
  //     const passwordMatching = await bcrypt.compare(password, user.password);
  //     if (!passwordMatching) throw new Error('LOGIN_INFORMATION_IS_NOT_VALID');
  //   }
  //
  //   return { accessToken: this.getAccessToken(user), refreshToken: this.getRefreshToken() };
  // }
  // private getAccessToken(user: User): string {
  //   return this.jwtService.sign(
  //     { id: user.id, name: user.name, nickname: user.nickname, email: user.email }, //
  //     { privateKey: process.env.JWT_TOKEN_KEY, expiresIn: '20m' },
  //   );
  // }
  //
  // private getRefreshToken(): string {
  //   return this.jwtService.sign({}, { privateKey: process.env.JWT_TOKEN_KEY, expiresIn: '1w' });
  // }
}
