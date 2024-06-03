import { IsArray, IsString } from 'class-validator';
import { CreateSublectionDto } from 'src/sublections/dto/create-sublection.dto';

export class CreateLectionDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsArray()
  sublections: CreateSublectionDto[];
}
