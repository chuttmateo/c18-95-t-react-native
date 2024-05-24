import { Module } from '@nestjs/common';
import { SublectionsService } from './sublections.service';
import { SublectionsController } from './sublections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sublection } from './entities/sublection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sublection])],
  controllers: [SublectionsController],
  providers: [SublectionsService],
})
export class SublectionsModule {}
