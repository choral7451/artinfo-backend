import { Module } from '@nestjs/common';
import { AuthController } from '@/api/auth/auth.controller';
import { AuthService } from '@/api/auth/auth.service';
import { UserService } from '@/api/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserRepository } from '@/api/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/entities/user.entity';

@Module({
  imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService, UserRepository],
})
export class AuthModule {}
