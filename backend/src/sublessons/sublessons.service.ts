import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSublessonDto } from './dto/create-sublesson.dto';
import { UpdateSublectionDto } from './dto/update-sublesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sublesson } from './entities/sublesson.entity';

@Injectable()
export class SublessonsService {
  constructor(
    @InjectRepository(Sublesson)
    private readonly repository: Repository<Sublesson>,
  ) {}
  create(CreateSublessonDto: CreateSublessonDto) {
    const sublesson = this.repository.create(CreateSublessonDto);
    return this.repository.save(sublesson);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const sublesson = await this.repository.findOne({ where: { id } });
    if (!sublesson) throw new NotFoundException('Sublesson not found: ' + id);
    return sublesson;
  }

  update(id: number, updateSublectionDto: UpdateSublectionDto) {
    //IMPLEMENT
    return ` IMPLEMENT: update sublection ${id} with ${updateSublectionDto}`;
  }

  async remove(id: number) {
    const sublection = await this.findOne(id);
    return this.repository.remove(sublection);
  }
}
