import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Signature = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
