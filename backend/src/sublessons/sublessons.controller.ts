import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { SublessonsService } from './sublessons.service';
import { CreateSublessonDto } from './dto/create-sublesson.dto';
import { UpdateSublectionDto } from './dto/update-sublesson.dto';

@Controller('sublessons')
export class SublessonsController {
  constructor(private readonly sublessonsService: SublessonsService) {}

  @Post()
  create(@Body() createSublectionDto: CreateSublessonDto) {
    return this.sublessonsService.create(createSublectionDto);
  }

  @Get()
  findAll() {
    return this.sublessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sublessonsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSublectionDto: UpdateSublectionDto,
  ) {
    return this.sublessonsService.update(id, updateSublectionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sublessonsService.remove(id);
  }
}
