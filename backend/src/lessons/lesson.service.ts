import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateLectionDto } from './dto/create-lection.dto';
// import { UpdateLectionDto } from './dto/update-lection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateLectionDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly repository: Repository<Lesson>,
  ) {}

  create(body: CreateLectionDto) {
    const lection = this.repository.create(body);
    return this.repository.save(lection);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const lesson = await this.repository.findOne({
      where: { id },
      relations: ['sublessons'],
    });
    if (!lesson) throw new NotFoundException('Lesson not found: ' + id);
    return lesson;
  }

  // update(id: number, updateLectionDto: UpdateLectionDto) {
  //   return `This action updates a #${id} lection`;
  // }

  async remove(id: number) {
    const lection = await this.findOne(id);
    return this.repository.remove(lection);
  }
}
