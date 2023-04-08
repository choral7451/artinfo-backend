import { Module } from '@nestjs/common';
import { AuthController } from '@/api/auth/auth.controller';
import { AuthService } from '@/api/auth/auth.service';
import { UserService } from '@/api/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaModule } from '@/prisma.module';

@Module({
  imports: [JwtModule.register({}), PrismaModule],
  controllers: [AuthController],
  providers: [JwtService, AuthService, UserService],
})
export class AuthModule {}
