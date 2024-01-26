import { Customer } from './entity/customer.entity';
import { User } from './entity/user.entity';
import { ConfigService } from '@nestjs/config';

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SeederOptions } from 'typeorm-extension';
import UserSeeder from './seeds/user.seeder';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions & SeederOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: this.configService.get<string>('MYSQL_ROOT_USER'),
      password: this.configService.get<string>('MYSQL_ROOT_PASSWORD'),
      database: this.configService.get<string>('MYSQL_DATABASE'),
      entities: [Customer, User], // use entites
      synchronize: true,
      seeds: [UserSeeder],
    };
  }
}
