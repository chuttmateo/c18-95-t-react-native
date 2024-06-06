import { IsArray, IsString } from 'class-validator';
import { CreateSublessonDto } from 'src/sublessons/dto/create-sublesson.dto';

export class CreateLessonDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsArray()
  sublessons: CreateSublessonDto[];
}
