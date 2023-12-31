import { Module , NestModule, MiddlewareConsumer} from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware'
import { AppController } from './app.controller';
import { CustomerController } from './customers.controller'
import { AppService } from './app.service';
import { CustomerModule } from './customers/customers.module'
import { CustomerService } from './customers.service'


@Module({
  imports: [CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('customer');
  }
}

/**
 * 
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
*/
