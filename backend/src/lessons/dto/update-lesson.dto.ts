import { PartialType } from '@nestjs/mapped-types';
import { CreateLectionDto } from './create-lesson.dto';

export class UpdateLectionDto extends PartialType(CreateLectionDto) {}
