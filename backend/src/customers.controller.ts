import { Controller, Get, Post, Query, Body, Render } from '@nestjs/common';
import { ICustomer } from './interfaces/customers.interface';
import { CustomerService } from './customers.service';

// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-controllers#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  // @Get(':id')
  // call(@Param() params): string {
  //   console.log(params.id);
  //   return `My Name is Tom_${params.id}`
  // }


  @Get()
  getCustomer() {
    return this.customerService.find();
  }

  @Get('user')
  getUser(@Query('id') id: number) {
    return this.customerService.findCustomer(id);
  }

  @Post('update')
  updateCustomer(@Body() customer: ICustomer) {
    this.customerService.update({
      id: customer.id, //とりあえず
      firstName: customer.firstName,
      lastName: customer.lastName,
      isActive: true,
    });
  }

  @Post('remove')
  remove(@Body() id: number) {
    // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/remove
    this.customerService.remove(id);
  }

  @Post('add')
  addCustomer(@Body() customer: ICustomer) {
    // dbにCustomerを追加する
    // curl -X POST -H "Content-Type: application/json" -d '{"id":101, "firstName":"hanako","lastName":"sato","isActive":true }' http://localhost:3000/customers/add
    // customer['user'].firstName アクセスしたい構造が違うので治す
    this.customerService.add({
      id: customer['user'].id, //とりあえず
      firstName: customer['user'].firstName,
      lastName: customer['user'].lastName,
      isActive: true,
    });
  }
}
