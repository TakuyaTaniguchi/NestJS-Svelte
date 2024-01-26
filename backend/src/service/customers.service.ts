// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-providers#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICustomer } from '../interfaces/customers.interface';
import { Customer } from '../entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  /**
   *
   * @param {ICustomer} customer
   * customerを追加する
   */
  add(customer: ICustomer): Promise<Customer> {
    return this.customerRepository.save<ICustomer>({
      id: customer.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      isActive: true,
    });
  }

  /**
   *
   * customerを取得する
   */

  async find() {
    const data = await this.customerRepository.find();
    return data;
  }

  /**
   * custonerを取得する 一人だけ
   */

  async findCustomer(id: number) {
    const data = await this.customerRepository.find({
      where: { id: id }, // nullすることで全員を取得できるので後で統合する
    });
    return data;
  }

  /**
   * customerを編集する
   */

  async update(customer: ICustomer) {
    await this.customerRepository.update(
      { id: customer.id },
      {
        firstName: customer.firstName,
        lastName: customer.lastName,
      },
    );
    // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/edit
    // return this.customerRepository.save<ICustomer>({
    //     id: 100,
    //     firstName: 'ファーストネーム',
    //     lastName: 'ラストネーム',
    //     isActive: false,
    // })
  }

  remove(id: number) {
    // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/remove
    return this.customerRepository.delete(id);
  }
}

// Next Action
// querybuildを理解して追加　更新　削除する
// https://orkhan.gitbook.io/typeorm/docs/select-query-builder#what-is-querybuilder
