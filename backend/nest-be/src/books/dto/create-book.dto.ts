import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Department } from 'src/department/entities/department.entity';

export class CreateBookDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty({ message: 'Please provide a departent' })
  @IsNumber()
  department: Department;

  // @IsOptional()
  // @IsInt({ message: 'Please provide a number' })
  // price: number;

  // @IsString({ each: true })
  // readonly users: string[];
}
