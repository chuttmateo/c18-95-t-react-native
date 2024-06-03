import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entities/option.entity';
import { GamesService } from 'src/games/games.service';
import { Game } from 'src/games/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Game])],
  controllers: [OptionsController],
  providers: [OptionsService, GamesService],
})
export class OptionsModule {}
