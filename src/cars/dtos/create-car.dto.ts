import { IsInt, IsString, MinLength } from 'class-validator';

export class CreateCatDto {
  @IsString({
    message: 'Brand must be a string',
  })
  readonly brand: string;
  @IsString({
    message: 'Model must be a string',
  })
  @MinLength(3)
  readonly model: string;
  @IsInt({
    message: 'Year must be an integer',
  })
  readonly year: number;
}
