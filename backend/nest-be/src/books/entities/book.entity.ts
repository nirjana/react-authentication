import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  department: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar' })
  name: string;
}
