import { PartialType } from '@nestjs/swagger';
import { CreateProgressDto } from './create-progress.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProgressDto extends PartialType(CreateProgressDto) {
  @IsNumber()
  @IsNotEmpty()
  score: number;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
