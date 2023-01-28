import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@/aritnfo/user/domain/user.entity';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  getUser() {}

  createUser(fields: UserFields) {
    return this.userModel.create(fields);
  }
}
