import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@/aritnfo/user/domain/user.entity';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserFields } from '@/aritnfo/user/application/dto/create-user-fields.class';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  createUser(fields: UserFields) {
    return this.userModel.create(fields);
  }
}
