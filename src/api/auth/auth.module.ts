import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './security/jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [JwtService, JwtStrategy, AuthService],
})
export class AuthModule {}
