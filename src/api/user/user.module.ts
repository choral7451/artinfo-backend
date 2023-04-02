import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '@/api/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@/api/user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
