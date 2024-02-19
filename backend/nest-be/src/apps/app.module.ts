import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from 'src/books/books.module';
import { Book } from 'src/books/entities/book.entity';
import { DepartmentModule } from 'src/department/department.module';
import { Department } from 'src/department/entities/department.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'admin123',
      username: 'postgres',
      entities: [User, Book, Department],
      database: 'imNew',
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    BooksModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
