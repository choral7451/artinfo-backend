import { Module } from '@nestjs/common';
import { UserModule } from '@/api/user/user.module';
import { AuthModule } from '@/api/auth/auth.module';
import { IssueModule } from '@/api/issue/issue.module';

@Module({
  imports: [
    AuthModule, //
    UserModule,
    IssueModule,
  ],
})
export class ApiModule {}
