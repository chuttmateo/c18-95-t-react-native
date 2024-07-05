import { Module } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';
import { ProgressService } from 'src/progress/progress.service';
import { UserService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progress } from 'src/progress/entities/progress.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Progress, User])],
  controllers: [RankController],
  providers: [RankService, ProgressService, UserService],
})
export class RankModule {}
