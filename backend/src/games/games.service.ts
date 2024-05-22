import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';
import { OptionsService } from './options.service';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    private optionsService: OptionsService,
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
    const options = body.options.map((option) => {
      return this.optionsService.create(option);
    });

    const game = this.gameRepository.create({
      ...body,
      options: await Promise.all(options),
    });
    return this.gameRepository.save(game);
  }
}
