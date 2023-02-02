import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { EmailVerification } from '@/aritnfo/verification/domain/email-verification.entity';
import { Nullable } from '@/common/types/native';

@Injectable()
export class VerificationService {
  static EMAIL_TOKEN_TIME_SPAN = 1 * 60 * 60;

  constructor(
    @InjectModel(EmailVerification)
    private readonly emailVerificationModel: ReturnModelType<typeof EmailVerification>, //
  ) {}

  async createEmailVerification(email: string): Promise<EmailVerification> {
    return this.emailVerificationModel.create({
      email: email,
      verificationCode: this.generateNumericRandomCode(),
    });
  }

  async verifyEmail(email: string, verificationCode: string): Promise<Nullable<EmailVerification>> {
    return this.emailVerificationModel.findOneAndUpdate(
      {
        email: email,
        verificationCode: verificationCode,
      },
      { verifiedToken: this.generateVerifiedToken(email) },
      { new: true },
    );
  }

  private generateVerifiedToken(email: string): string {
    return jwt.sign(
      {
        email: email,
        generatedAt: new Date(),
      },
      process.env.AUTH_EMAIL_TOKEN_JWT_SECRET,
      { expiresIn: VerificationService.EMAIL_TOKEN_TIME_SPAN },
    );
  }

  private generateNumericRandomCode(length = 6): string {
    let code = '';
    for (let i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }
}
