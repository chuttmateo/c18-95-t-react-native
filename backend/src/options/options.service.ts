import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';
import { CreateOptionDto } from './dto/create-option.dto';
import { GamesService } from '../games/games.service';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    private readonly gameService: GamesService,
  ) {}
  // create(createOptionDto: CreateOptionDto) {
  //   return 'This action adds a new option';
  // }

  // findAll() {
  //   return `This action returns all options`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} option`;
  // }

  // update(id: number, updateOptionDto: UpdateOptionDto) {
  //   return `This action updates a #${id} option`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} option`;
  // }

  async saveOption(gameId: number, body: CreateOptionDto) {
    const game = await this.gameService.findOne(gameId);
    const option = this.optionRepository.create(body);
    option.game = game;
    return this.optionRepository.save(option);
  }
}
