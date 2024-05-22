import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
// import { UpdateLevelDto } from './dto/update-level.dto';
import { Level } from './entities/level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LectionsService } from 'src/lections/lections.service';
import { GamesService } from 'src/games/games.service';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
    private lectionsService: LectionsService,
    private gamesService: GamesService,
  ) {}
  async create(createLevelDto: CreateLevelDto) {
    // create level
    const level = this.levelRepository.create(createLevelDto);
    const lections = createLevelDto.lections.map((lection) => {
      return this.lectionsService.create(lection);
    });
    const games = createLevelDto.games.map((game) => {
      return this.gamesService.create(game);
    });

    level.lections = await Promise.all(lections);
    level.games = await Promise.all(games);

    // save level
    return this.levelRepository.save(level);
  }

  findAll(): Promise<Level[]> {
    return this.levelRepository.find({
      relations: ['lections', 'games'],
    });
  }

  findOne(id: number): Promise<Level> {
    return this.levelRepository.findOne({
      where: { id },
      relations: ['lections', 'games', 'games.options'],
    });
  }

  // update(id: number, updateLevelDto: UpdateLevelDto) {
  //   return `This action updates a #${id} level`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} level`;
  // }
}
