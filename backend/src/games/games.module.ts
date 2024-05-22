import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Option } from './entities/option.entity';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { OptionsService } from './options.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Option])],
  providers: [GamesService, OptionsService],
  controllers: [GamesController],
})
export class GamesModule {}
