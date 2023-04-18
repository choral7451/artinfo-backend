import { Body } from '@nestjs/common';
import { ArtinfoController, ArtinfoPost } from '../../global/decorator/rest-api';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request/create-user.request';
import { ArtinfoResponse } from '@/global/serializer/response';

@ArtinfoController('user', 'User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ArtinfoPost({ path: '/', summary: '회원가입' })
  async createUser(@Body() request: CreateUserRequest): Promise<ArtinfoResponse<string>> {
    try {
      await this.userService.createUser(request.toEntity());
      return ArtinfoResponse.OK();
    } catch (e) {
      return ArtinfoResponse.ERROR_WITH('회원 가입에 실패하였습니다.');
    }
  }
  //
  // @UseGuards(JwtAuthGuard)
  // @ArtinfoPatch({ path: '/', summary: '내 정보 수정', auth: true })
  // async updateMe(@Body() request: UpdateUserRequest, @Signature() signature): Promise<UserResponse> {
  //   const user = await this.userService.updateUser(signature.id, request.getUpdateUserFields());
  //   return UserResponse.fromUser(user);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @ArtinfoGet({ path: '/me', summary: '내 정보 조회', auth: true })
  // async getMe(@Signature() signature) {
  //   return UserResponse.fromUser(signature);
  // }
}
