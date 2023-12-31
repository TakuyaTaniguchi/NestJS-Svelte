import { Controller, Get,Post,Req,Query,Param ,Body ,ParseIntPipe} from '@nestjs/common';
import { Request } from 'express';
import { CreateCustomerDto } from './create-customer.dto'
import { Customer } from './interfaces/customers.interface'
import { CustomerService } from './customers.service'

// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-controllers#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9

@Controller('customers')
export class CustomerController {
  constructor(
    private customerService: CustomerService
    ) {}


  // @Get(':id')
  // call(@Param() params): string {
  //   console.log(params.id);
  //   return `My Name is Tom_${params.id}`
  // }

  @Get()
  call(@Body() customer: Customer) {
    this.customerService.call({
      id: 100,
      name: '111'
    })
  }
  @Post()
  getUser(@Body() customer: Customer){
    return this.customerService.call(customer)
  }

  @Get('user')
  callUsesr(@Query('id') id: number, @Req() request: Request): string {
    return `yes_Query__ ${id}`
  }
  @Get('user/member/:id')
  callUsesrMember(@Query('sort') sort: string,  @Param('id', ParseIntPipe) id: number) {
     return this.customerService.findOn(id)
  }
  @Post('user')
  create(@Body() createCustomerDto:CreateCustomerDto): string {
    // curl -X POST http://localhost:3000/customers/user
    // curl -X POST -H "Content-Type: application/json" -d '{"name":"taro", "Age":"30"}' http://localhost:3000/customers/user
    console.log(createCustomerDto)
    return 'This action adds a new cat';
  }
  
}
