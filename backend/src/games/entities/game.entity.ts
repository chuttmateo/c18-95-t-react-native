import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Option } from './option.entity';
import { Level } from 'src/levels/entities/level.entity';

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  question: string;

  @Column()
  description: string;

  @OneToMany(() => Option, (option) => option.game)
  options: Option[];

  @ManyToOne(() => Level, (level) => level.lections)
  level: Level;
}