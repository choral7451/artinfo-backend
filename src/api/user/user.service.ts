import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/api/user/user.repository';
import { User } from '@/api/user/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async updateUser(id: number, fields: IUpdateUserFields): Promise<User> {
  //   if (fields.password) fields.password = await this.getHashedPassword(fields.password);
  //   return return this.prismaService.user.update({ where: { id: id }, data: fields });
  // }

  async createUser(user: User): Promise<User> {
    user.password = await this.getHashedPassword(user.password);
    return this.userRepository.createUser(user);
  }

  // async getUserById(id: number): Promise<User | null> {
  //   return this.prismaService.user.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  // async getUserByEmail(email: string): Promise<User | null> {
  //   return this.prismaService.user.findUnique({
  //     where: {
  //       email: email,
  //     },
  //   });
  // }
  //
  private getHashedPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
}
