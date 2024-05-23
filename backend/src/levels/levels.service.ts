import { Injectable, NotFoundException } from '@nestjs/common';
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
    private readonly repository: Repository<Level>,
    private readonly lectionsService: LectionsService,
    private readonly gamesService: GamesService,
  ) {}
  async create(createLevelDto: CreateLevelDto) {
    // create level
    const level = this.repository.create(createLevelDto);
    // const lections = createLevelDto.lections.map((lection) => {
    //   return this.lectionsService.create(lection);
    // });
    // const games = createLevelDto.games.map((game) => {
    //   return this.gamesService.create(game);
    // });

    // level.lections = await Promise.all(lections);
    // level.games = await Promise.all(games);

    // save level
    // above code is not longer needed, using {cascade: true} we can do it automatically
    return this.repository.save(level);
  }

  findAll(): Promise<Level[]> {
    return this.repository.find({
      relations: ['lections', 'games'],
    });
  }

  findOne(id: number): Promise<Level> {
    return this.repository.findOne({
      where: { id },
      relations: ['lections', 'games', 'games.options', 'lections.sublections'],
    });
  }

  // update(id: number, updateLevelDto: UpdateLevelDto) {
  //   return `This action updates a #${id} level`;
  // }

  async remove(id: number) {
    const level = await this.findOne(id);
    if (!level) throw new NotFoundException('Level not found: ' + id);
    return this.repository.remove(level);
  }
}
