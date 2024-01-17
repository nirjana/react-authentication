import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Book } from 'src/books/entities/book.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Min } from 'class-validator';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  userIdNo: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'Elon Musk',
  })
  @Column({ type: 'varchar', length: 30 })
  name: string;

  @ApiProperty({
    description: 'The Username of the user',
    example: 'Elon Musk',
  })
  @Column({ type: 'varchar', length: 15 })
  username: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'sEujata@gmail.com',
  })
  @Column({ type: 'varchar', length: 40, unique: true })
  email: string;

  @ApiProperty({
    description: 'The mobile of the user',
    example: '9964521793',
  })
  @Column({ type: 'bigint', unique: true, nullable: true })
  mobile: number | null;

  @ApiProperty({
    description: 'The age of the user',
    example: '32',
  })
  @Column({ type: 'int' })
  age: number;

  @ApiProperty({
    description: 'The password of the user',
    example: '32@Ab_a',
  })
  @Column({ type: 'varchar' })
  password: string;

  @ApiProperty({
    description: 'The gender of the user',
    example: 'f',
  })
  @Column({ type: 'enum', enum: ['m', 'f', 'u'] })
  /**
   * m - male
   * f - female
   * u - unspecified
   */
  gender: string;

  @ApiProperty({
    description: 'Book',
    example: '["Math"]',
  })
  @JoinTable()
  @ManyToMany(() => Book, (book) => book.users, { cascade: true })
  books: Book[];
}
