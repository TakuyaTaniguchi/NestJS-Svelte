import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../interfaces/users.interface';
@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column({ default: '' })
  password_digest: string;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly created_at: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly updated_at: Date;
}
