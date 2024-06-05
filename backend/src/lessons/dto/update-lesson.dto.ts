import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLectionDto extends PartialType(CreateLessonDto) {}
