import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentModule } from 'src/department/department.module';
import { User } from 'src/users/entities/user.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, User]), DepartmentModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
