import { CreateOptionDto } from './create-option.dto';
import { IsArray, IsString } from 'class-validator';

export class CreateGameDto {
  @IsString()
  type: string;
  @IsString()
  question: string;
  @IsString()
  description: string;
  @IsArray()
  options: CreateOptionDto[];
}
