import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '@/aritnfo/user/application/user.service';
import { UserFields } from '@/aritnfo/user/application/dto/create-user-fields.class';

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
  createUser() {
    const fields = new UserFields();
    fields.name = '임성준';
    fields.nick_name = 'choral';
    fields.email = 'chorales@naver.com';
    fields.password = 'a740857!';

    return this.userService.createUser(fields);
  }
}
