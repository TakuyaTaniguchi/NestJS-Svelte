// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-providers#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9
import { Injectable } from '@nestjs/common'
import { InjectRepository  } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
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
     * @param param0 
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

    async findOneBy(){
        
        const data = await this.customerRepository.findOne({
            where: {
                id: 100
            }
        })

        return data
    }
  
}


// Next Action
// querybuildを理解して追加　更新　削除する
// https://orkhan.gitbook.io/typeorm/docs/select-query-builder#what-is-querybuilder