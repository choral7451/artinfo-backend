import { Module } from '@nestjs/common';
import { User } from '@/aritnfo/user/domain/user.entity';
import { UserController } from '@/aritnfo/user/interface/user.controller';
import { UserService } from '@/aritnfo/user/application/user.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
