import { Body, Controller, Post } from '@nestjs/common';
import { VerificationService } from '@/aritnfo/verification/application/verification.service';
import CreateEamlilVerificationRequest from '@/aritnfo/verification/interface/dto/request/create-eamlil-verification.request';
import { VerifyEmail } from '@/aritnfo/verification/interface/dto/request/verify-email.request';
import { VerifyEmailResponse } from '@/aritnfo/verification/interface/dto/response/VerifyEmail.response';
import { ErrorCodes } from '@/common/error-codes';

@Controller('verification')
export class VerificationController {
  constructor(
    private readonly verificationService: VerificationService, //
  ) {}

  @Post('/email')
  async requestEmailVerification(@Body() request: CreateEamlilVerificationRequest): Promise<boolean> {
    const emailVerification = await this.verificationService.createEmailVerification(request.email);
    return emailVerification !== null;
  }

  @Post('/email/verify')
  async verifyEmail(@Body() request: VerifyEmail): Promise<VerifyEmailResponse> {
    const emailVerification = await this.verificationService.verifyEmail(request.email, request.verificationCode);
    console.log(emailVerification);
    if (!emailVerification) throw new Error(ErrorCodes.EMAIL_VERIFICATION_CODE_IS_NOT_VALID);

    return VerifyEmailResponse.fromEmailVerification(emailVerification);
  }
}
