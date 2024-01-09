import { DataSource } from 'typeorm';
import { Customer } from './customer.entity';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db',
    entities: [Customer], // use entites
    synchronize: true,
});