import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { Option } from './entities/option.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find({ relations: ['options'] });
  }

  async findOne(id: number): Promise<Game> {
    return this.gameRepository.findOne({
      where: { id },
      relations: ['options'],
    });
  }

  async create(body: CreateGameDto) {
    const options = body.options.map((optiondto) => {
      const option = this.optionRepository.create(optiondto);
      return this.optionRepository.save(option);
    });

    const game = this.gameRepository.create({
      ...body,
      options: await Promise.all(options),
    });
    return this.gameRepository.save(game);
  }

  async remove(id: number) {
    const game = await this.findOne(id);
    if (!game) throw new NotFoundException('Game not found: ' + id);
    return this.gameRepository.remove(game);
  }
}
