import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';

const passwordRegEx = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,}$/;

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Elon Musk',
  })
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'The Username of the user',
    example: 'Elon Musk',
  })
  // @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  // @IsAlphanumeric(null, {
  //   message: 'Username does not allow characters other than alphanumeric.',
  // })
  username: string;
  @ApiProperty({
    description: 'The email of the user',
    example: 'sujata@gmail.com',
  })
  @IsNotEmpty({ message: 'Please provide a valid Email.' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The age of the user',
    example: '32',
  })
  @IsOptional()
  @IsInt()
  age: number;

  @ApiProperty({
    description: 'The gender of the user',
    example: 'f',
  })
  @IsOptional()
  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @ApiProperty({
    description: 'The password of the user',
    example: '32@Ab_a',
  })
  @IsNotEmpty({
    message: `Password must contain a minimum of 8 and a maximum of 20 characters, 
      at least one uppercase letter, 
      one lowercase letter, 
      one number, and 
      one special character`,
  })
  // @Matches(passwordRegEx)
  password: string;

  @ApiProperty({
    description: 'The mobile of the user',
    example: '9864521793',
  })
  @IsOptional()
  @IsNumber()
  @Min(1000000000, { message: 'Mobile number must be 10 digits' })
  mobile: number;

  @ApiProperty({
    description: 'Book',
    example: '["Math"]',
  })
  @IsString({ each: true })
  readonly books: string[];
}
