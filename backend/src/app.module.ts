import { Module , NestModule, MiddlewareConsumer, Global} from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware'
import { AppController } from './app.controller';
import { CustomerController } from './customers.controller'
import { AppService } from './app.service';
import { CustomerModule } from './customers/customers.module'
import { CustomerService } from './customers.service'
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeOrmConfigService } from './data-source'
import { ConfigModule } from '@nestjs/config';
 
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),

    CustomerModule
  ],
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