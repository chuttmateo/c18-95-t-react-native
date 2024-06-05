import { PartialType } from '@nestjs/swagger';
import { CreateSublectionDto } from './create-sublesson.dto';

export class UpdateSublectionDto extends PartialType(CreateSublectionDto) {}
