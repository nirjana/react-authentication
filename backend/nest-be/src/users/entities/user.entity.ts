import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Book } from 'src/books/entities/book.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  userIdNo: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'varchar', length: 15 })
  username: string;

  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @Column({ type: 'bigint', unique: true, nullable: true })
  mobile: number | null;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string;

  @JoinTable()
  @ManyToMany(() => Book, (book) => book.users, { cascade: true })
  books: Book[];
}
