import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Connection, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
    private readonly connection: Connection,
  ) {}

  async create(body: CreateBookDto) {
    try {
      const errMessage = [];

      const { name, department } = body;
      // const users = await Promise.all(
      //   body.users.map((name) => this.preloadUserByName(name)),
      // );

      const newBook = this.booksRepository.create(body);
      return await this.booksRepository.save(newBook);
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async findAll() {
    try {
      const books = await this.booksRepository.find();
      return books;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  async findOne(id: string) {
    try {
      const book = await this.booksRepository.findOne({
        where: { id: +id },
        select: {
          id: true,
          name: true,
          department: true,
        },
      });

      if (!book) {
        console.log(book);
        throw new NotFoundException(`Book with ID ${id} not found`);
      }

      return book;
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: [error.message],
        error: 'Internal Server Error',
      });
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
