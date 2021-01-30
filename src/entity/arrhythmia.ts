import { environment } from '../env/environment';
import { type } from 'os';
import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { Scenario } from './scenario';

@Entity('arrhytmia', { schema: `${environment.DB.SCHEMA}` })
export class Arrhythmia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_arr: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({
    name: 'arrhythmiaperscenario',
    joinColumn: {
      name: 'id_scenario',
    },
    inverseJoinColumn: {
      name: 'id_arr',
    },
  })
  scenarios: Scenario[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
