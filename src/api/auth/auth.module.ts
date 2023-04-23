import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './security/jwt.strategy';
import { AuthService } from './auth.service';
import { UserService } from '@/api/user/user.service';
import { UserRepository } from '@/api/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [JwtService, JwtStrategy, AuthService, UserService, UserRepository],
})
export class AuthModule {}
