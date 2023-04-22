import { Injectable } from '@nestjs/common';
import { createLogger, transports, Logger } from 'winston';
import * as winstonMongoDB from 'winston-mongodb';
import * as winston from 'winston';
import { utilities } from 'nest-winston';

@Injectable()
export class LoggerService {
  private logger: Logger;
  private readonly env = process.env.NODE_ENV;

  // error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
  constructor() {
    this.logger = createLogger({
      level: 'http',
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('ARTINFO', {
          prettyPrint: true,
        }),
      ),
      transports: [
        new transports.Console(),
        new winstonMongoDB.MongoDB({
          level: 'http',
          db: process.env.MONGO_URL!,
          collection: 'http_logs',
          expireAfterSeconds: 30 * 24 * 60 * 60,
          options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }, // 추가 옵션
        }),
        new winstonMongoDB.MongoDB({
          level: 'error', // 로그 레벨 설정
          db: process.env.MONGO_URL!, // mongodb 연결 정보
          collection: 'error_logs', // 컬렉션 이름
          expireAfterSeconds: 30 * 24 * 60 * 60,
          options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }, // 추가 옵션
        }),
      ],
    });
  }

  log(message: any) {
    this.logger.log('info', message);
  }

  error(message: any, trace?: string, context?: string) {
    this.logger.log('error', message, trace, context);
  }

  warn(message: any, context?: string) {
    this.logger.log('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.logger.log('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.logger.log('verbos', message, context);
  }
}
