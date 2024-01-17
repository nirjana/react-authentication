import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  readonly name: string;

  // @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  // @IsAlphanumeric(null, {
  //   message: 'Username does not allow characters other than alphanumeric.',
  // })
  username: string;

  @IsNotEmpty({ message: 'Please provide a valid Email.' })
  @IsEmail()
  email: string;

  @IsOptional()
  @IsInt()
  age: number;

  @IsOptional()
  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @IsNotEmpty({
    message: `Password must contain a minimum of 8 and a maximum of 20 characters, 
      at least one uppercase letter, 
      one lowercase letter, 
      one number, and 
      one special character`,
  })
  // @Matches(passwordRegEx)
  password: string;

  @IsString({ each: true })
  readonly books: string[];
}
