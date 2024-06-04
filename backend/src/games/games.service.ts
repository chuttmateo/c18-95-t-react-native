import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return this.gameRepository.find();
  }

  async findOne(id: number): Promise<Game> {
    const game = await this.gameRepository.findOne({
      where: { id },
      relations: ['options'],
    });
    if (!game) throw new NotFoundException('Game not found: ' + id);
    return game;
  }

  async create(body: CreateGameDto) {
    const game = this.gameRepository.create(body);
    return this.gameRepository.save(game);
  }

  async remove(id: number) {
    const game = await this.findOne(id);
    return this.gameRepository.remove(game);
  }
}
