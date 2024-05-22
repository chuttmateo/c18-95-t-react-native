import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';
import { CreateOptionDto } from './dto/create-option.dto';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {}

  // async findAll(): Promise<Game[]> {
  //   return this.gameRepository.find({ relations: ['options'] });
  // }

  // async findOne(id: number): Promise<Game> {
  //   return this.gameRepository.findOne({
  //     where: { id },
  //     relations: ['options'],
  //   });
  // }

  async create(body: CreateOptionDto) {
    const option = this.optionRepository.create(body);
    return this.optionRepository.save(option);
  }
}
