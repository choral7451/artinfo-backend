import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env/.env',
    }),
    TypegooseModule.forRoot(process.env.MONGODB),
    UserModule,
  ],
})
export class AppModule {}
