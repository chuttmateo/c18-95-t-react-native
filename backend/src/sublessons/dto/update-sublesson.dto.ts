import { PartialType } from '@nestjs/swagger';
import { CreateSublessonDto } from './create-sublesson.dto';

export class UpdateSublectionDto extends PartialType(CreateSublessonDto) {}
