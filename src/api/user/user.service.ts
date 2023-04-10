import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '@prisma/client';
import { ICreateUserFields } from './dto/fields/create-user.fields';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(fields: ICreateUserFields): Promise<User> {
    fields.password = await this.getHashedPassword(fields.password);
    return this.prismaService.user.create({ data: fields });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  private getHashedPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
  };
}
