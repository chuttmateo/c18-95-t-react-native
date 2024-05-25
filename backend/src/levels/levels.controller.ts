import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { LevelsService } from './levels.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { UpdateLevelDto } from './dto/update-level.dto';

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  @ApiOperation({
    summary: 'Post a new level to database, return the created level',
  })
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelsService.create(createLevelDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all levels from database without games options',
  })
  findAll() {
    return this.levelsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get one level from database with games options',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.levelsService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
  //   return this.levelsService.update(+id, updateLevelDto);
  // }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.levelsService.remove(id);
  }
}
