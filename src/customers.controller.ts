import { Controller, Get } from '@nestjs/common';


@Controller('customers')
export class CustomerController {
  constructor() {}

  @Get()
  call(): string {
    return 'My Name is Tom'
  }
  @Get('user')
  callUsesr(): string {
    return 'My Name is user'
  }
}
