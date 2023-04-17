import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as winstonMongoDB from 'winston-mongodb';

const env = process.env.NODE_ENV;

// log level
// error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'error',
      // production 환경이라면 http, 개발환경이라면 모든 단계를 로그
      format:
        env === 'production'
          ? // production 환경은 자원을 아끼기 위해 simple 포맷 사용
            winston.format.simple()
          : winston.format.combine(
              winston.format.timestamp(),
              utilities.format.nestLike('ARTINFO', {
                prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
              }),
            ),
    }),

    new winstonMongoDB.MongoDB({
      level: 'info', // 로그 레벨 설정
      db: process.env.MONGO_URL!, // mongodb 연결 정보
      collection: 'info_logs', // 컬렉션 이름
      capped: true, // capped collection 사용 여부
      cappedMax: 10000000, // capped collection 용량 제한
      expireAfterSeconds: 30 * 24 * 60 * 60,
      decolorize: true, // 로그 색상 제거 여부
      options: { useNewUrlParser: true, useUnifiedTopology: true }, // 추가 옵션
    }),

    new winstonMongoDB.MongoDB({
      level: 'error', // 로그 레벨 설정
      db: process.env.MONGO_URL!, // mongodb 연결 정보
      collection: 'error_logs', // 컬렉션 이름
      capped: true, // capped collection 사용 여부
      cappedMax: 10000000, // capped collection 용량 제한
      decolorize: true, // 로그 색상 제거 여부
      expireAfterSeconds: 30 * 24 * 60 * 60,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, // 추가 옵션
    }),
  ],
});
