import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { ICreateUserFields } from './dto/fields/create-user.fields';
import { IUpdateUserFields } from '@/api/user/dto/fields/update-user.fields';
import { PrismaService } from '@/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async updateUser(id: number, fields: IUpdateUserFields): Promise<User> {
    if (fields.password) fields.password = await this.getHashedPassword(fields.password);
    return this.prismaService.user.update({ where: { id: id }, data: fields });
  }

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
