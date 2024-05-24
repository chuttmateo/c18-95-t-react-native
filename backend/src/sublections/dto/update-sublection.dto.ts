import { PartialType } from '@nestjs/swagger';
import { CreateSublectionDto } from './create-sublection.dto';

export class UpdateSublectionDto extends PartialType(CreateSublectionDto) {}
