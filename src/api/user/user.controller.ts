import { Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request/create-user.request';
import { Signature } from '@/global/decorator/signature';
import { UserResponse } from '@/api/user/dto/response/user.response';
import { CreateResponse } from '@/global/dto/create.response';
import { ArtinfoController, ArtinfoGet, ArtinfoPost } from '@/global/decorator/rest-api';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost(CreateResponse, { path: '/', summary: '회원가입' })
  async createUser(@Body() request: CreateUserRequest) {
    const userId = await this.userService.createUser(request.toEntity());
    return CreateResponse.fromId(userId);
  }

  // @ArtinfoPatch(UserResponse, { path: '/', summary: '내 정보 수정', auth: true })
  // async updateMe(@Body() request: UpdateUserRequest, @Signature() signature): Promise<UserResponse> {
  //   const user = await this.userService.updateUser(signature.id, request.getUpdateUserFields());
  //   return UserResponse.fromUser(user);
  // }

  @ArtinfoGet(UserResponse, { path: '/me', summary: '내 정보 조회', auth: true })
  async getMe(@Signature() signature) {
    return UserResponse.fromUser(signature);
  }
}
