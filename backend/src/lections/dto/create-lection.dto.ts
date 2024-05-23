import { CreateSublectionDto } from 'src/sublections/dto/create-sublection.dto';

export class CreateLectionDto {
  title: string;
  description: string;
  sublections: CreateSublectionDto[];
}
