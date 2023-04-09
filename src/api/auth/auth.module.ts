import { Module } from '@nestjs/common';
import { AuthController } from '@/api/auth/auth.controller';
import { AuthService } from '@/api/auth/auth.service';
import { UserService } from '@/api/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaModule } from '@/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@/api/auth/security/jwt.strategy';

@Module({
  imports: [JwtModule.register({}), PrismaModule],
  controllers: [AuthController],
  providers: [JwtService, JwtStrategy, AuthService, UserService],
})
export class AuthModule {}
