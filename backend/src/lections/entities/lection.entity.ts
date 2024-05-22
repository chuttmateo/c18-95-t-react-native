import { Level } from 'src/levels/entities/level.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lections')
export class Lection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Level, (level) => level.lections)
  level: Level;
}
