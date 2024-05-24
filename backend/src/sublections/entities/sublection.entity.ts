import { Lection } from 'src/lections/entities/lection.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sublections')
export class Sublection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Lection, (lection) => lection.sublections, {
    onDelete: 'CASCADE',
  })
  lection: Lection;
}
