import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSublectionDto } from './dto/create-sublection.dto';
import { UpdateSublectionDto } from './dto/update-sublection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sublection } from './entities/sublection.entity';

@Injectable()
export class SublectionsService {
  constructor(
    @InjectRepository(Sublection)
    private readonly repository: Repository<Sublection>,
  ) {}
  create(createSublectionDto: CreateSublectionDto) {
    const sublection = this.repository.create(createSublectionDto);
    return this.repository.save(sublection);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const sublection = await this.repository.findOne({ where: { id } });
    if (!sublection) throw new NotFoundException('Sublection not found: ' + id);
    return sublection;
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
