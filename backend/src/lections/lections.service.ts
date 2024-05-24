import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateLectionDto } from './dto/create-lection.dto';
// import { UpdateLectionDto } from './dto/update-lection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lection } from './entities/lection.entity';
import { Repository } from 'typeorm';
import { CreateLectionDto } from './dto/create-lection.dto';

@Injectable()
export class LectionsService {
  constructor(
    @InjectRepository(Lection)
    private readonly repository: Repository<Lection>,
  ) {}

  create(body: CreateLectionDto) {
    const lection = this.repository.create(body);
    return this.repository.save(lection);
  }

  findAll() {
    return this.repository.find({ relations: ['sublections'] });
  }

  async findOne(id: number) {
    const lection = await this.repository.findOne({
      where: { id },
      relations: ['sublections'],
    });
    if (!lection) throw new NotFoundException('Lection not found: ' + id);
    return lection;
  }

  // update(id: number, updateLectionDto: UpdateLectionDto) {
  //   return `This action updates a #${id} lection`;
  // }

  async remove(id: number) {
    const lection = await this.findOne(id);
    return this.repository.remove(lection);
  }
}
