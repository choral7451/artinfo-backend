import { Body } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';
import { ArtinfoController, ArtinfoPost } from '@/global/decorator/rest-api';
import { CreateUserRequest } from '@/api/user/dto/request/create-user.request';
import { UserResponse } from '@/api/user/dto/response/user.response';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost('/', '회원가입')
  async createUser(@Body() request: CreateUserRequest): Promise<UserResponse> {
    const user = await this.userService.createUser(request.getCreateUserFields());
    return UserResponse.fromUser(user);
  }
}
