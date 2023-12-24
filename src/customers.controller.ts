import { Controller, Get,Post,Req,Query,Param ,Body} from '@nestjs/common';
import { Request } from 'express';

import { CreateCustomerDto } from './create-customer.dto'

// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-controllers#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9

@Controller('customers')
export class CustomerController {
  constructor() {}


  // @Get(':id')
  // call(@Param() params): string {
  //   console.log(params.id);
  //   return `My Name is Tom_${params.id}`
  // }

  @Get()
  call(@Param() params): string {
    return `My Name is Tom`
  }
  @Get('user')
  callUsesr(@Query('id') id: number, @Req() request: Request): string {
    return `yes_Query__ ${id}`
  }
  @Get('user/member/:id')
  callUsesrMember(@Query('sort') sort: string, @Param() params): string {
    return `params:${params.id}_Query:${sort}`
  }
  @Post('user')
  create(@Body() createCustomerDto:CreateCustomerDto): string {
    // curl -X POST http://localhost:3000/customers/user
    // curl -X POST -H "Content-Type: application/json" -d '{"name":"taro", "Age":"30"}' http://localhost:3000/customers/user
    console.log(createCustomerDto)
    return 'This action adds a new cat';
  }
  
}
