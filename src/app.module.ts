// src/app.module.ts
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { RentalModule } from './rental/rental.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [CarModule, RentalModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
