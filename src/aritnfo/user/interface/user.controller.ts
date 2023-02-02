import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@/aritnfo/user/application/user.service';
import { UserFields } from '@/aritnfo/user/application/dto/create-user-fields.class';
import { CreateUserRequest } from '@/aritnfo/user/interface/dto/create-user.request';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Get('/')
  getUser() {
    return '하이';
  }

  @Post('/')
  createUser(@Body() request: CreateUserRequest) {
    return this.userService.createUser(request.getUserFields());
  }
}
