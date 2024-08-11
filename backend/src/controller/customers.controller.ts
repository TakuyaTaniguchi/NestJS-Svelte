import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ICustomer } from '../interfaces/customers.interface';
import { CustomerService } from '../service/customers.service';
import { convertToObject } from 'typescript';

// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-controllers#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getCustomers() {
    return await this.customerService.find();
  }

  @Get(':id')
  getCustomer(@Param('id') id: number) {
    // idがnumberでない場合はエラーを返す
    // if (typeof id !== 'number') {
    //   throw new HttpException('Bad request idが正しくありません', HttpStatus.BAD_REQUEST);
    // }
    try {
      return this.customerService.findCustomer(id);
    } catch (error) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
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
    // リクエストボディは直接 ICustomer の構造にマッピングされる
    this.customerService.add({
      firstName: customer.firstName,
      lastName: customer.lastName,
      isActive: customer.isActive,
    });
  }

  // @Post('add')
  // addCustomer(@Body() customer: ICustomer) {
  //   // リクエストボディは直接 ICustomer の構造にマッピングされる
  //   // curl -X POST -H "Content-Type: application/json" -d '{"id":101, "firstName":"hanako","lastName":"sato","isActive":true }' http://localhost:3000/customers/add
  //   this.customerService.add({
  //     id: customer.id, // 修正: customer 直下のプロパティにアクセス
  //     firstName: customer.firstName,
  //     lastName: customer.lastName,
  //     isActive: customer.isActive,
  //   });
// }

  // @Post('add')
  // addCustomer(@Body() customer: ICustomer) {
  //   // dbにCustomerを追加する
  //   // curl -X POST -H "Content-Type: application/json" -d '{"id":101, "firstName":"hanako","lastName":"sato","isActive":true }' http://localhost:3000/customers/add
  //   // customer['customer'].firstName アクセスしたい構造が違うので治す
  //   this.customerService.add({
  //     id: customer['customer'].id, //とりあえず
  //     firstName: customer['customer'].firstName,
  //     lastName: customer['customer'].lastName,
  //     isActive: true,
  //   });
  // }
}
