import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProgressDto {
  @IsNumber()
  @IsNotEmpty()
  score: number;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
