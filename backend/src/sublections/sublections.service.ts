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

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateSublectionDto: UpdateSublectionDto) {
    //IMPLEMENT
    return `This action updates a #${id} sublection ${updateSublectionDto.description}`;
  }

  async remove(id: number) {
    const sublection = await this.findOne(id);
    if (!sublection) throw new NotFoundException('Sublection not found: ' + id);
    return this.repository.remove(sublection);
    //return this.repository.delete({ id });
  }
}
