import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateLectionDto } from './dto/create-lection.dto';
// import { UpdateLectionDto } from './dto/update-lection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lection } from './entities/lection.entity';
import { Repository } from 'typeorm';
import { CreateLectionDto } from './dto/create-lection.dto';
import { SublectionsService } from 'src/sublections/sublections.service';

@Injectable()
export class LectionsService {
  constructor(
    @InjectRepository(Lection)
    private readonly repository: Repository<Lection>,
    private readonly sublectionsService: SublectionsService,
  ) {}

  create(body: CreateLectionDto) {
    const lection = this.repository.create(body);
    return this.repository.save(lection);
  }

  findAll() {
    return this.repository.find({ relations: ['sublections'] });
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: { id },
      relations: ['sublections'],
    });
  }

  // update(id: number, updateLectionDto: UpdateLectionDto) {
  //   return `This action updates a #${id} lection`;
  // }

  async remove(id: number) {
    const lection = await this.findOne(id);
    if (!lection) throw new NotFoundException('Lection not found: ' + id);
    return this.repository.remove(lection);
  }
}
