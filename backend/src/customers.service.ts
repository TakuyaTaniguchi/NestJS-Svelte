// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-providers#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9
import { Injectable } from '@nestjs/common'
import { InjectRepository  } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICustomer } from './interfaces/customers.interface'
import { Customer } from './customer.entity'
 
@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
    ){}
    // private readonly customers: Customer[] = [];

    // create(customer:Customer) {
    //     this.customers.push(customer)
    // }

    /**
     * 
     * @param {ICustomer} customer 
     * customerを追加する
     */
    add(customer:ICustomer):Promise<Customer>{
        return this.customerRepository.save<ICustomer>({
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            isActive: customer.isActive,
        })
    }

    /**
     * 
     * customerを取得する
     */

    async findOneBy(){
        const data = await this.customerRepository.findOne({
            where: {
                id: 3371
            }
        })

        return data
    }

    /**
     * customerを編集する
     */

    edit( ):Promise<Customer>{
        // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/edit
        return this.customerRepository.save<ICustomer>({
            id: 100,
            firstName: 'ファーストネーム',
            lastName: 'ラストネーム',
            isActive: false,
        })
    }

    remove() {
        // curl -X POST -H "Content-Type: application/json" -d '{"id":100,}' http://localhost:3000/customers/remove
        return this.customerRepository.delete(101)
    }
  
}


// Next Action
// querybuildを理解して追加　更新　削除する
// https://orkhan.gitbook.io/typeorm/docs/select-query-builder#what-is-querybuilder