import { Book } from 'src/books/entities/book.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  discription: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  // @JoinTable()
  // @ManyToMany(type => Book,
  //     book => book.coffees,
  //   {cascade: true})
  // flavors: Flavor[];
}
