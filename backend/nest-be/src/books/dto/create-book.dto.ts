import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty({ message: 'Please provide a departent' })
  department: string;

  @IsOptional()
  @IsInt({ message: 'Please provide a number' })
  price: number;
}
