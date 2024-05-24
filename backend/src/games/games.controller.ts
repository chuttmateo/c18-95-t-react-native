import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionsService } from './options.service';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService,
    private readonly optionsService: OptionsService,
  ) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.findOne(id);
  }

  @Post()
  create(@Body() game: CreateGameDto) {
    return this.gamesService.create(game);
  }
  @Post(':id/option')
  @ApiParam({ name: 'id', type: 'number' })
  @ApiOperation({
    summary: 'Create an option for a game',
  })
  async createReview(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreateOptionDto,
  ) {
    return this.optionsService.saveOption(id, body);
  }
}
