import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from './entities/level.entity';
import { LessonsService } from 'src/lessons/lesson.service';
import { GamesService } from 'src/games/games.service';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Game } from 'src/games/entities/game.entity';
import { Option } from 'src/options/entities/option.entity';
import { OptionsService } from 'src/options/options.service';
import { SublessonsService } from 'src/sublessons/sublessons.service';
import { Sublesson } from 'src/sublessons/entities/sublesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Level, Lesson, Game, Option, Sublesson])],
  controllers: [LevelsController],
  providers: [
    LevelsService,
    LessonsService,
    GamesService,
    OptionsService,
    SublessonsService,
  ],
})
export class LevelsModule {}
