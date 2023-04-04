import { Injectable } from '@nestjs/common';
import { User } from '@/api/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/api/user/user.repository';
import { ICreateUserFields } from '@/api/user/dto/fields/create-user.fields';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository, //
  ) {}

  async createUser(fields: ICreateUserFields): Promise<User> {
    fields.password = await this.getHashedPassword(fields.password);

    return this.userRepository.create(User.from(fields));
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneByEmail(email);
  }

  private getHashedPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
}
