import { CreateOptionDto } from './create-option.dto';

export class CreateGameDto {
  type: string;
  question: string;
  description: string;
  options: CreateOptionDto[];
}
