import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';
import { User } from '@/api/user/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async login({ email, password }: { email: string; password: string }): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.userService.getUserByEmail(email);

    if (user.password) {
      const passwordMatching = await bcrypt.compare(password, user.password);
      if (!passwordMatching) throw new HttpException('해당 회원 정보가 일치하지 않습니다.', 400);
    }

    return { accessToken: this.getAccessToken(user), refreshToken: this.getRefreshToken() };
  }

  private getAccessToken(user: User): string {
    return this.jwtService.sign(
      { id: user.id, name: user.name, nickname: user.nickname, email: user.email }, //
      { privateKey: process.env.JWT_TOKEN_KEY, expiresIn: '20m' },
    );
  }

  private getRefreshToken(): string {
    return this.jwtService.sign({}, { privateKey: process.env.JWT_TOKEN_KEY, expiresIn: '1w' });
  }
}
