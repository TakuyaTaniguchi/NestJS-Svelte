import { DataSource } from 'typeorm';
import { Customer } from './customer.entity';
import { ConfigService ,registerAs} from '@nestjs/config';


import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService :ConfigService) {}

    public createTypeOrmOptions():TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username:  this.configService.get<string>('MYSQL_ROOT_USER'),
            password: this.configService.get<string>('MYSQL_ROOT_PASSWORD'),
            database: this.configService.get<string>('MYSQL_DATABASE'),
            entities: [Customer], // use entites
            synchronize: true,
        }
    }
}
