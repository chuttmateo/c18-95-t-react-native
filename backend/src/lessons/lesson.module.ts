import { Module } from '@nestjs/common';
import { LessonsService } from './lesson.service';
import { LectionsController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { SublessonsService } from 'src/sublessons/sublessons.service';
import { Sublesson } from 'src/sublessons/entities/sublesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Sublesson])],
  controllers: [LectionsController],
  providers: [LessonsService, SublessonsService],
})
export class LectionsModule {}
