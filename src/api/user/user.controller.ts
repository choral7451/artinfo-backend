import { Controller, Get } from '@nestjs/common';
import { UserService } from '@/api/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUser() {
    await this.userService.createUser();
    return '하이';
  }
}
