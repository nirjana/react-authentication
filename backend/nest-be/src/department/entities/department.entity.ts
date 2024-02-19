import { Book } from 'src/books/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

  @OneToMany(() => Book, (book) => book.department)
  books: Book[];
}
