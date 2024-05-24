import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
// import { UpdateLevelDto } from './dto/update-level.dto';
import { Level } from './entities/level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private readonly repository: Repository<Level>,
  ) {}
  async create(createLevelDto: CreateLevelDto) {
    const level = this.repository.create(createLevelDto);
    return this.repository.save(level);
  }

  findAll(): Promise<Level[]> {
    return this.repository.find({
      relations: ['lections', 'games'],
    });
  }

  async findOne(id: number): Promise<Level> {
    const level = await this.repository.findOne({
      where: { id },
      relations: ['lections', 'games', 'games.options', 'lections.sublections'],
    });
    if (!level) throw new NotFoundException('Level not found: ' + id);
    return level;
  }

  // update(id: number, updateLevelDto: UpdateLevelDto) {
  //   return `This action updates a #${id} level`;
  // }

  async remove(id: number) {
    const level = await this.findOne(id);
    return this.repository.remove(level);
  }
}
