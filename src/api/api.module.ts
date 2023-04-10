import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { IssueModule } from './issue/issue.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [
    AuthModule, //
    UserModule,
    IssueModule,
    SystemModule,
  ],
})
export class ApiModule {}
