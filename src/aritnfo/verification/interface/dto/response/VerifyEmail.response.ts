import { EmailVerification } from '@/aritnfo/verification/domain/email-verification.entity';

export class VerifyEmailResponse {
  verifiedToken: string;

  static fromEmailVerification(emailVerification: EmailVerification) {
    const response = new VerifyEmailResponse();
    response.verifiedToken = emailVerification.verifiedToken;
    return response;
  }
}
