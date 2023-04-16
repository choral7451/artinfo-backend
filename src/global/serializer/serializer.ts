import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { BadRequestException, ClassSerializerInterceptor, ValidationError, ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export function setNestApp<T extends INestApplication>(app: T): void {
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        value: true,
      },
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors.map(e => new CustomValidationError(e)));
      },
    }),
  );
}

export class CustomValidationError {
  property: string;
  value: any;
  constraints: Constraint[];

  constructor(validationError: ValidationError) {
    this.property = validationError.property;
    this.value = validationError.value;
    if (validationError.constraints) {
      this.constraints = Object.entries(validationError.constraints).map(obj => new Constraint(obj));
    }
  }
}

class Constraint {
  type: string;
  message: string;

  constructor(constraint: string[]) {
    this.type = constraint[0];
    this.message = constraint[1];
  }
}
