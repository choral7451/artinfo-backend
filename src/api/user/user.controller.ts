import { Body, UseGuards } from '@nestjs/common';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '../../global/decorator/rest-api';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request/create-user.request';
import { JwtAuthGuard } from '@/api/auth/security/jwt-auth.guard';
import { Signature } from '@/global/decorator/signature';
import { UserResponse } from '@/api/user/dto/response/user.response';
import { CreateResponse } from '@/global/dto/create.response';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost(CreateResponse, { path: '/', summary: '회원가입' })
  async createUser(@Body() request: CreateUserRequest) {
    const userId = await this.userService.createUser(request.toEntity());
    return CreateResponse.fromId(userId);
  }
  //
  // @UseGuards(JwtAuthGuard)
  // @ArtinfoPatch({ path: '/', summary: '내 정보 수정', auth: true })
  // async updateMe(@Body() request: UpdateUserRequest, @Signature() signature): Promise<UserResponse> {
  //   const user = await this.userService.updateUser(signature.id, request.getUpdateUserFields());
  //   return UserResponse.fromUser(user);
  // }
  //
  @UseGuards(JwtAuthGuard)
  @ArtinfoGet(UserResponse, { path: '/me', summary: '내 정보 조회', auth: true })
  async getMe(@Signature() signature) {
    return UserResponse.fromUser(signature);
  }
}
