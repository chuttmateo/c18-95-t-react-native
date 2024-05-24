import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from './entities/level.entity';
import { LectionsService } from 'src/lections/lections.service';
import { GamesService } from 'src/games/games.service';
import { Lection } from 'src/lections/entities/lection.entity';
import { Game } from 'src/games/entities/game.entity';
import { Option } from 'src/games/entities/option.entity';
import { OptionsService } from 'src/games/options.service';
import { SublectionsService } from 'src/sublections/sublections.service';
import { Sublection } from 'src/sublections/entities/sublection.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Level, Lection, Game, Option, Sublection]),
  ],
  controllers: [LevelsController],
  providers: [
    LevelsService,
    LectionsService,
    GamesService,
    OptionsService,
    SublectionsService,
  ],
})
export class LevelsModule {}
