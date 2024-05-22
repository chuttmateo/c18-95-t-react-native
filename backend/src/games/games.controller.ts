import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionsService } from './options.service';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService,
    private optionsService: OptionsService,
  ) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @Post()
  create(@Body() game: CreateGameDto) {
    return this.gamesService.create(game);
  }
  @Post(':id/option')
  async createReview(@Param('id') id: string, @Body() body: CreateOptionDto) {
    return this.optionsService.saveOption(+id, body);
  }
}
