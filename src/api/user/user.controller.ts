import { Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request/create-user.request';
import { Signature } from '@/global/decorator/signature';
import { UserResponse } from '@/api/user/dto/response/user.response';
import { CreateResponse } from '@/global/dto/create.response';
import { ArtinfoController, ArtinfoGet, ArtinfoPatch, ArtinfoPost } from '@/global/decorator/rest-api';
import { UpdateUserRequest } from '@/api/user/dto/request/update-user.request';
import { SuccessResponse } from '@/global/dto/success.response';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost(CreateResponse, { path: '/', summary: '회원가입' })
  async createUser(@Body() request: CreateUserRequest) {
    const userId = await this.userService.createUser(request.toEntity());
    return CreateResponse.fromId(userId);
  }

  @ArtinfoPatch(SuccessResponse, { path: '/', summary: '내 정보 수정', auth: true })
  async updateMe(@Body() request: UpdateUserRequest, @Signature() signature): Promise<SuccessResponse> {
    const result = await this.userService.updateUser(signature.id, request.toEntity());
    return SuccessResponse.fromResult(result);
  }

  @ArtinfoGet(UserResponse, { path: '/me', summary: '내 정보 조회', auth: true })
  async getMe(@Signature() signature) {
    const user = await this.userService.getUserById(signature.id);
    return UserResponse.fromUser(user);
  }
}
