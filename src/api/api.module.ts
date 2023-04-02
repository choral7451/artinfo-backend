import { Module } from '@nestjs/common';
import { UserModule } from '@/api/user/user.module';
import { AuthModule } from '@/api/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule, //
  ],
})
export class ApiModule {}
