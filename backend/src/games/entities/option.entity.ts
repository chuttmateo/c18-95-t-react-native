import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Game, (game) => game.options)
  game: Game;
}
