import { Module } from '@nestjs/common';
import { LectionsService } from './lections.service';
import { LectionsController } from './lections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lection } from './entities/lection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lection])],
  controllers: [LectionsController],
  providers: [LectionsService],
  exports: [TypeOrmModule],
})
export class LectionsModule {}
