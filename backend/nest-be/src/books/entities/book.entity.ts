import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'varchar', length: 30 })
  department: string;

  // @Column({ type: 'int' })
  // price: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany((type) => User, (user) => user.books)
  users: User[];
}
