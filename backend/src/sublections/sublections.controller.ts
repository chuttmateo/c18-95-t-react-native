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
import { SublectionsService } from './sublections.service';
import { CreateSublectionDto } from './dto/create-sublection.dto';
import { UpdateSublectionDto } from './dto/update-sublection.dto';

@Controller('sublections')
export class SublectionsController {
  constructor(private readonly sublectionsService: SublectionsService) {}

  @Post()
  create(@Body() createSublectionDto: CreateSublectionDto) {
    return this.sublectionsService.create(createSublectionDto);
  }

  @Get()
  findAll() {
    return this.sublectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sublectionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSublectionDto: UpdateSublectionDto,
  ) {
    return this.sublectionsService.update(id, updateSublectionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sublectionsService.remove(id);
  }
}
