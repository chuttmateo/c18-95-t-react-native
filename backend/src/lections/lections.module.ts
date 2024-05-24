import { Module } from '@nestjs/common';
import { LectionsService } from './lections.service';
import { LectionsController } from './lections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lection } from './entities/lection.entity';
import { SublectionsService } from 'src/sublections/sublections.service';
import { Sublection } from 'src/sublections/entities/sublection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lection, Sublection])],
  controllers: [LectionsController],
  providers: [LectionsService, SublectionsService],
})
export class LectionsModule {}
