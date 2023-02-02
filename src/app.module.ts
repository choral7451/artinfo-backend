import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from '@/aritnfo/user/user.module';
import { VerificationModule } from '@/aritnfo/verification/verification.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './env/.env.dev' }),
    TypegooseModule.forRoot('mongodb://localhost:27017/artinfo'), //
    UserModule,
    VerificationModule,
  ],
})
export class AppModule {}
