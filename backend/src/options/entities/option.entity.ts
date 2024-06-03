import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from '../../games/entities/game.entity';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Game, (game) => game.options, {
    onDelete: 'CASCADE',
  })
  game: Game;
}
