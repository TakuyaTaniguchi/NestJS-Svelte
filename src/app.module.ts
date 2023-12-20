import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomerController } from './customers.controller'
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,CustomerController],
  providers: [AppService],
})
export class AppModule {}
