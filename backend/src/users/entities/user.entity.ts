import { Progress } from 'src/progress/entities/progress.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Progress, (progress) => progress.user, {
    cascade: true,
  })
  progress: Progress;
}
