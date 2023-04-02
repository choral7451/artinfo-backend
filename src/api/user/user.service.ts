import { Injectable } from '@nestjs/common';
import { User } from '@/api/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '@/api/user/user.repository';
import { CreateUserRequest } from '@/api/user/dto/request/create-user.request';
import { UserResponse } from '@/api/user/dto/response/user.response';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository, //
  ) {}

  async createUser(request: CreateUserRequest): Promise<UserResponse> {
    if (request.getPassword) request.setPassword = await this.getHashedPassword(request.getPassword);
    const user = await this.userRepository.create(request.toEntity());
    return UserResponse.fromUser(user);
  }

  private getHashedPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
}
