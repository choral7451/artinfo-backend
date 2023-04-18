import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '@/global/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent');
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - start;

      if (statusCode >= 500) {
        this.logger.error(`${method} ${originalUrl} ${statusCode} ${ip} ${userAgent} ${duration}ms`, req.body);
      } else if (statusCode >= 400) {
        this.logger.warn(`${method} ${originalUrl} ${statusCode} ${ip} ${userAgent} ${duration}ms`, req.body);
      } else {
        this.logger.log(`${method} ${originalUrl} ${statusCode} ${ip} ${userAgent} ${duration}ms`);
      }
    });

    next();
  }
}
