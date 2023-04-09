import { Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '@/global/decorator/rest-api';
import { CreateUserRequest } from '@/api/user/dto/request/create-user.request';
import { UserResponse } from '@/api/user/dto/response/user.response';
import { JwtAuthGuard } from '@/api/auth/security/jwt-auth.guard';
import { Signature } from '@/global/decorator/signature';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost({ path: '/', summary: '회원가입' })
  async createUser(@Body() request: CreateUserRequest): Promise<UserResponse> {
    const user = await this.userService.createUser(request.getCreateUserFields());
    return UserResponse.fromUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @ArtinfoGet({ path: '/me', summary: '유저 조회', auth: true })
  async getMe(@Signature() signature) {
    return UserResponse.fromUser(signature);
  }
}
