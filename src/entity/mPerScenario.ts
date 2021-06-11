import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  JoinTable,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Medication } from './medication';
import { Scenario } from './scenario';

@Entity('mperscenario', { schema: `${environment.DB.SCHEMA}` })
export class MperScenario extends BaseEntity {
  @Column({ type: 'numeric' })
  dose!: number;

  @Column({ type: 'varchar' })
  unit!: string;

  @ManyToOne(() => Medication, (medication) => medication.scenarios, { primary: true })
  @JoinColumn({ name: 'id_medication' })
  medication!: Medication;

  @ManyToOne(() => Scenario, (scenario) => scenario.medications, { primary: true })
  @JoinColumn({ name: 'id_scenario' })
  scenario!: Scenario;

  @CreateDateColumn()
  created_at!: Date;

  @CreateDateColumn()
  updated_at!: Date;
}
