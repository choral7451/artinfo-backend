import { Injectable } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/api/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, //
    private readonly jwtService: JwtService, //
  ) {}

  async login({ email, password }: { email: string; password: string }): Promise<{ accessToken: string; refreshToken: string }> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new Error('THE_USER_DOSE_NOT_EXIST');

    const passwordMatching = await bcrypt.compare(password, user.password);
    if (!passwordMatching) throw new Error('LOGIN_INFORMATION_IS_NOT_VALID');

    return { accessToken: this.getAccessToken(user), refreshToken: this.getRefreshToken() };
  }

  private getAccessToken(user: User) {
    return this.jwtService.sign(
      { name: user.name, nickname: user.nickname, email: user.email }, //
      { expiresIn: '20m' },
    );
  }

  private getRefreshToken() {
    return this.jwtService.sign({ expiresIn: '1w' });
  }
}
