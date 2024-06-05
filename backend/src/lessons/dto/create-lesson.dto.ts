import { IsArray, IsString } from 'class-validator';
import { CreateSublectionDto } from 'src/sublessons/dto/create-sublesson.dto';

export class CreateLectionDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsArray()
  sublections: CreateSublectionDto[];
}
