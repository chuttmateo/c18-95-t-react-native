import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LectionsService } from './lections.service';
import { CreateLectionDto } from './dto/create-lection.dto';
// import { UpdateLectionDto } from './dto/update-lection.dto';

@Controller('lections')
export class LectionsController {
  constructor(private readonly lectionsService: LectionsService) {}

  @Post()
  create(@Body() createLectionDto: CreateLectionDto) {
    return this.lectionsService.create(createLectionDto);
  }

  @Get()
  findAll() {
    return this.lectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectionsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLectionDto: UpdateLectionDto) {
  //   return this.lectionsService.update(+id, updateLectionDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectionsService.remove(+id);
  }
}
