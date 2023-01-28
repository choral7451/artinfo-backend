import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModule } from '@/aritnfo/user/user.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/artinfo'), //
    UserModule,
  ],
})
export class AppModule {}
