import { Body, UseGuards } from '@nestjs/common';
import { ArtinfoController, ArtinfoGet, ArtinfoPatch, ArtinfoPost } from '../../global/decorator/rest-api';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request/create-user.request';
import { UserResponse } from './dto/response/user.response';
import { JwtAuthGuard } from '../auth/security/jwt-auth.guard';
import { UpdateUserRequest } from '@/api/user/dto/request/update-user.request';
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
  @ArtinfoPatch({ path: '/', summary: '내 정보 수정', auth: true })
  async updateMe(@Body() request: UpdateUserRequest, @Signature() signature): Promise<UserResponse> {
    const user = await this.userService.updateUser(signature.id, request.getUpdateUserFields());
    return UserResponse.fromUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @ArtinfoGet({ path: '/me', summary: '내 정보 조회', auth: true })
  async getMe(@Signature() signature) {
    return UserResponse.fromUser(signature);
  }
}
