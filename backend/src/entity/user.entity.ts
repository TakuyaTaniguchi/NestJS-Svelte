import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column()
  password_digest: string;

  @Column()
  readonly created_at: Date;

  @Column()
  readonly updated_at: Date;

}


