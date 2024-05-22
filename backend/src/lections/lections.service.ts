import { Injectable } from '@nestjs/common';
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
    private lectionRepository: Repository<Lection>,
  ) {}

  create(body: CreateLectionDto) {
    const lection = this.lectionRepository.create(body);
    return this.lectionRepository.save(lection);
  }

  findAll() {
    return this.lectionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lection`;
  }

  // update(id: number, updateLectionDto: UpdateLectionDto) {
  //   return `This action updates a #${id} lection`;
  // }

  remove(id: number) {
    return `This action removes a #${id} lection`;
  }
}
