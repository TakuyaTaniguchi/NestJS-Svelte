// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-providers#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9
import { Injectable } from '@nestjs/common'
import { Customer } from './interfaces/customers.interface'

@Injectable()
export class CustomerService {
    // private readonly customers: Customer[] = [];

    // create(customer:Customer) {
    //     this.customers.push(customer)
    // }

    call(customer:Customer){
        return `${customer.id}/${customer.name}だよ`
    }

    findOn(id:number){
        return id
    }

    // findAll(): Customer[] {
    //     return this.customers
    // }
}