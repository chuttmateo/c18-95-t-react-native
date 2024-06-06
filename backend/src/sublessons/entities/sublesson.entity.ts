import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sublessons')
export class Sublesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.sublessons, {
    onDelete: 'CASCADE',
  })
  lesson: Lesson;
}
