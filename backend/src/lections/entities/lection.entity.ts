import { Level } from 'src/levels/entities/level.entity';
import { Sublection } from 'src/sublections/entities/sublection.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('lections')
export class Lection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Level, (level) => level.lections, {
    onDelete: 'CASCADE',
  })
  level: Level;

  @OneToMany(() => Sublection, (sublection) => sublection.lection, {
    cascade: true,
  })
  sublections: Sublection[];
}
