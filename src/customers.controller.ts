import { Controller, Get,Req,Query } from '@nestjs/common';
import { Request } from 'express';

@Controller('customers')
export class CustomerController {
  constructor() {}

  @Get()
  call(): string {
    return 'My Name is Tom'
  }
  @Get('user')
  callUsesr(@Query('id') id: number, @Req() request: Request): string {
    return `My Name is user_ ${id}`
  }
}
