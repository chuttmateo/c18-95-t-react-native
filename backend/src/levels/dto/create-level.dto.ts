import { IsArray, IsString } from 'class-validator';
import { CreateGameDto } from 'src/games/dto/create-game.dto';
import { CreateLectionDto } from 'src/lessons/dto/create-lesson.dto';

export class CreateLevelDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsArray()
  lections: CreateLectionDto[];
  @IsArray()
  games: CreateGameDto[];
}
