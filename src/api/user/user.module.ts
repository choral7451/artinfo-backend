import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '@/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_TOKEN_KEY,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
