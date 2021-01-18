import { type } from 'os';
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Scenario } from './scenario';

@Entity('arrhytmia')
export class Arrhythmia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_arr: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({ name: 'arrhythmiaperscenario' })
  scenarios: Scenario[];
}
