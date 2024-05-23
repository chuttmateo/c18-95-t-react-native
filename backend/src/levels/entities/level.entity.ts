import { Game } from 'src/games/entities/game.entity';
import { Lection } from 'src/lections/entities/lection.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('levels')
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @OneToMany(() => Lection, (lection) => lection.level, {
    cascade: true,
  })
  lections: Lection[];

  @OneToMany(() => Game, (game) => game.level, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  games: Game[];
}
