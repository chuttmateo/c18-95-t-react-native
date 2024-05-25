import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { GamesService } from './games.service';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    private readonly gameService: GamesService,
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
    const game = await this.gameService.findOne(gameId);
    const option = this.optionRepository.create(body);
    option.game = game;
    return this.optionRepository.save(option);
  }
}
