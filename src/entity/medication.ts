import { MperScenario } from './mPerScenario';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Scenario } from './scenario';

@Entity('medication')
export class Medication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_medication: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => MperScenario, (mperScenario) => mperScenario.medication)
  @JoinColumn({ name: 'id_scenario' })
  scenarios: Scenario[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
