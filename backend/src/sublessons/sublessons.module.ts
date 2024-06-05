import { Module } from '@nestjs/common';
import { SublessonsService } from './sublessons.service';
import { SublessonsController } from './sublessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sublesson } from './entities/sublesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sublesson])],
  controllers: [SublessonsController],
  providers: [SublessonsService],
})
export class SublectionsModule {}
