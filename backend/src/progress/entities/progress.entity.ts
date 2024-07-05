import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('progress')
export class Progress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @OneToOne(() => User, (user) => user.progress, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;
}
