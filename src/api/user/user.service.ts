import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/api/user/user.repository';
import { User } from '@/api/user/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUser(id: number, user: User): Promise<boolean> {
    if (user.password) user.password = await this.getHashedPassword(user.password);
    return this.userRepository.update(id, user);
  }

  async createUser(user: User): Promise<number> {
    user.password = await this.getHashedPassword(user.password);
    return this.userRepository.create(user);
  }

  // async getUserById(id: number): Promise<User | null> {
  //   return this.prismaService.user.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.getUserByEmail(email);
  }

  private getHashedPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
}
