import { Level } from 'src/levels/entities/level.entity';
import { Sublesson } from 'src/sublessons/entities/sublesson.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Level, (level) => level.lessons, {
    onDelete: 'CASCADE',
  })
  level: Level;

  @OneToMany(() => Sublesson, (sublesson) => sublesson.lesson, {
    cascade: true,
  })
  sublessons: Sublesson[];
}
