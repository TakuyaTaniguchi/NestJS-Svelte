import { Controller, Get,Post,Req,Query,Param ,Body ,ParseIntPipe, Render} from '@nestjs/common';
import { Request } from 'express';
import { CreateCustomerDto } from './create-customer.dto'
import { ICustomer } from './interfaces/customers.interface'
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
  @Render('index')
  async index(@Body() customer: ICustomer) {
    const data = await this.customerService.findOneBy()

    return {
      data: data,
      message: 'Hello world!!!! Nest' ,
      user : {
       id: 100,
       name: 'taro'
      }
   };
  }

  @Get('sample')
  getCustomer(@Body() id:number) {
    // curl http://localhost:3000/customers/sample
    return this.customerService.findOneBy()
  }

  @Post('edit')
  editCustomer(@Body() id:number) {
    // curl http://localhost:3000/customers/edit
    return this.customerService.edit()
  }

  @Post('remove')
  remove(){
    // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/remove
    return this.customerService.remove()
  }

  @Post('add')
  addCustomer(@Body() customer: ICustomer){
    // dbにCustomerを追加する
    // curl -X POST -H "Content-Type: application/json" -d '{"id":101, "firstName":"hanako","lastName":"sato","isActive":true }' http://localhost:3000/customers/add
    this.customerService.add({
      id:customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      isActive: customer.isActive
      })
  }


  @Get('user')
  callUsesr(@Query('id') id: number, @Req() request: Request): string {
    return `yes_Query__ ${id}`
  }
  @Get('user/member/:id')
  callUsesrMember(@Query('sort') sort: string,  @Param('id', ParseIntPipe) id: number) {
    //  return this.customerService.findOn(id)
  }
  @Post('user')
  create(@Body() createCustomerDto:CreateCustomerDto): string {
    // curl -X POST -H "Content-Type: application/json" -d '{"id":100, "firstName":"taro","lastName":"tanaka","isActive":true }' http://localhost:3000/customers/
    // curl -X POST -H "Content-Type: application/json" -d '{"name":"taro", "Age":"30"}' http://localhost:3000/customers/user
    console.log(createCustomerDto)
    return 'This action adds a new cat';
  }
  
}
