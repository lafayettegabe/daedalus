/* eslint-disable prettier/prettier */
// middleware just log and pass
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthenticationMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('Request: ' + req.url);
    next();
  }
}
