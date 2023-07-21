import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { HttpModule } from '@nestjs/axios';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';

@Module({
  imports: [HttpModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
