import { Module } from '@nestjs/common';
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
export class AppModule {}

/**
 * 
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
*/
