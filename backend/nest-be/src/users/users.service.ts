import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    try {
      const errMessage = [];
      const { email, username } = body;

      const existingUser = await this.usersRepository.findOne({
        where: { email: ILike(`${body.email}`) },
      });

      if (existingUser) {
        throw new ConflictException('Email already exists');
      }

      const newUser = this.usersRepository.create(body);
      return await this.usersRepository.save(newUser);
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async findAll() {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.usersRepository.findOne({
        where: { id: +id },
        select: {
          id: true,
          name: true,
          userIdNo: true,
          email: true,
          mobile: true,
        },
      });

      if (!user) {
        console.log(user);
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: [error.message],
        error: 'Internal Server Error',
      });
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const existingUser = await this.usersRepository.findOne({
        where: { id: +id },
      });
      if (!existingUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      const updatedUser = Object.assign(existingUser, updateUserDto);

      await this.usersRepository.save(updatedUser);

      return updatedUser;
    } catch (error) {
      console.error(error);

      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
