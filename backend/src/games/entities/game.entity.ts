import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Option } from '../../options/entities/option.entity';
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

  @OneToMany(() => Option, (option) => option.game, {
    cascade: true,
  })
  options: Option[];

  @ManyToOne(() => Level, (level) => level.lessons, {
    onDelete: 'CASCADE',
  })
  level: Level;
}
