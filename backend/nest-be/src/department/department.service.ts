import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Book)
    private readonly BookRepository: Repository<Book>,
    private readonly connection: Connection,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  findAll() {
    return `This action returns all department`;
  }

  async findOne(id: string) {
    // const department = this.departmentRepository.findOne(id, {
    //   relations: ['flavors'],
    // });
    // if (!department) {
    //   throw new NotFoundException(`Department #${id} not found`);
    // }
    // return coffee;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
