// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-providers#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9
import { Injectable } from '@nestjs/common'
import { InjectRepository  } from '@nestjs/typeorm';
import { Repository,DataSource } from 'typeorm';
// import { Customer } from './interfaces/customers.interface' // 名前衝突する
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
    add({
        id,
        firstName,
        lastName,
        isActive
    }){
        this.customerRepository.save({
            id: id,
            firstName: firstName,
            lastName: lastName,
            isActive: isActive,
        })
    }

    async findOneBy(){
        // 取得できるようにする
        await this.customerRepository.findOneBy({})
    }
  

    
    findOn(id: number) {
        return this.customerRepository.findOne({
            where: {
                id: id
            }
        })
    }
}


// Next Action
// querybuildを理解して追加　更新　削除する
// https://orkhan.gitbook.io/typeorm/docs/select-query-builder#what-is-querybuilder