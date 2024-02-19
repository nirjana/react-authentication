import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Book)
    private readonly BookRepository: Repository<Book>,
    private dataSource: DataSource,
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
