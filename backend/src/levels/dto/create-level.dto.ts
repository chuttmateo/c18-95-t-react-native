import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { CreateLectionDto } from 'src/lections/dto/create-lection.dto';

export class CreateLevelDto {
  title: string;
  description: string;
  lections: CreateLectionDto[];
  games: CreateGameDto[];
}
