import { Department } from 'src/department/entities/department.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Department, (department) => department.books)
  department: Department;

  // @Column({ type: 'int' })
  // price: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany((type) => User, (user) => user.books)
  users: User[];
}
