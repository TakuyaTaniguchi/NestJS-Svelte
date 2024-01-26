import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ICustomer } from '../interfaces/customers.interface';
@Entity()
export class Customer implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
