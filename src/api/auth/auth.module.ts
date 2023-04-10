import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaModule } from '../../../prisma/prisma.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './security/jwt.strategy';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [JwtModule.register({}), PrismaModule],
  controllers: [AuthController],
  providers: [JwtService, JwtStrategy, AuthService, UserService],
})
export class AuthModule {}
