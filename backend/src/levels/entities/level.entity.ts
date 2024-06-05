import { Game } from 'src/games/entities/game.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('levels')
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.level, {
    cascade: true,
  })
  lessons: Lesson[];

  @OneToMany(() => Game, (game) => game.level, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  games: Game[];
}
