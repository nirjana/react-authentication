import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from 'src/books/books.module';
import { Book } from 'src/books/entities/book.entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Department, Book]),
    forwardRef(() => BooksModule),
  ],

  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
