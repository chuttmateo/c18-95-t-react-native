import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
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

  async saveOption(gameId: number, body: CreateOptionDto) {
    const game = await this.gameRepository.findOne({ where: { id: gameId } });
    if (game) {
      const option = await this.optionRepository.create(body);
      option.game = game;
      return this.optionRepository.save(option);
    } else {
      throw new NotFoundException('Game not found: ' + gameId);
    }
  }
}
