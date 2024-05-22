import { PartialType } from '@nestjs/mapped-types';
import { CreateLectionDto } from './create-lection.dto';

export class UpdateLectionDto extends PartialType(CreateLectionDto) {}
