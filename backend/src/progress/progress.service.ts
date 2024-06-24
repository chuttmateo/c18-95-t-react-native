import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProgressDto } from './dto/create-progress.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { Progress } from './entities/progress.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private readonly repository: Repository<Progress>,
    private readonly userService: UserService,
  ) {}

  async create(createProgressDto: CreateProgressDto) {
    const user = await this.getUserFromUserService(createProgressDto.userId);

    const progress = new Progress();
    progress.score = createProgressDto.score;
    progress.user = user;

    const dbProgress = await this.repository.findOne({ where: { user } });
    if (dbProgress) {
      throw new NotAcceptableException('User already has a progress');
    }
    return this.repository.save(progress);
  }

  findAll() {
    return this.repository
      .find({
        relations: ['user'],
        order: { score: 'DESC' },
        take: 10,
      })
      .then((results) => {
        return results.map((progress) => {
          return {
            ...progress,
            user: {
              id: progress.user?.id,
              name: progress.user?.username,
            },
          };
        });
      });
  }

  async findOne(id: number) {
    const progress = await this.repository.findOne({ where: { id } });
    if (!progress) {
      throw new NotFoundException('Progress not found: ' + id);
    }
    return progress;
  }

  async update(id: number, updateProgressDto: UpdateProgressDto) {
    // find progress by id and user
    const progress = await this.repository.findOne({
      where: { id, user: { id: updateProgressDto.userId } },
      relations: ['user'],
    });
    if (!progress) {
      throw new NotFoundException(
        'Progress not found: ' +
          id +
          'or user not found' +
          ' user: ' +
          updateProgressDto.userId,
      );
    }
    // update score in the current progress
    progress.score = updateProgressDto.score;
    // update in db
    return this.repository.update(id, progress);
  }

  // remove(id: number) {
  //   return this.repository.delete(id);
  // }
  private async getUserFromUserService(id: number): Promise<User> {
    const user = await this.userService.findOneById(id.toString());
    if (!user) {
      throw new NotFoundException('User with id ' + id + ' not found');
    }
    return user;
  }
}
