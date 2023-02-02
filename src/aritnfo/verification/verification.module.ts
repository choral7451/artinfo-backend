import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { EmailVerification } from '@/aritnfo/verification/domain/email-verification.entity';
import { VerificationController } from '@/aritnfo/verification/interface/verification.controller';
import { VerificationService } from '@/aritnfo/verification/application/verification.service';

@Module({
  imports: [TypegooseModule.forFeature([EmailVerification])],
  controllers: [VerificationController],
  providers: [VerificationService],
})
export class VerificationModule {}
