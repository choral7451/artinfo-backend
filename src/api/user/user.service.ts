import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@/api/user/user.entity';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly model: ReturnModelType<typeof User>,
  ) {}

  async createUser() {
    await this.model.create({
      name: 'A',
      nickName: 'b',
      email: 'asdas',
    });
  }
}
