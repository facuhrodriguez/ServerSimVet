import { Simulation } from './simulation';
import { Pathology } from './pathology';
import { MperScenario } from './mPerScenario';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Arrhythmia } from './arrhythmia';
import { Spp } from './spp';
import { environment } from '../env/environment';

@Entity('scenario', { schema: `${environment.DB.SCHEMA}` })
export class Scenario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_scenario: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Pathology)
  @JoinTable({
    name: 'pathologyperscenario',
    joinColumn: {
      name: 'id_scenario',
    },
    inverseJoinColumn: { name: 'id_pat' },
  })
  pathologies: Pathology[];

  @ManyToMany(() => Arrhythmia)
  @JoinTable({
    name: 'arrhythmiaperscenario',
    joinColumn: {
      name: 'id_arr',
    },
    inverseJoinColumn: {
      name: 'id_scenario',
    },
  })
  arrhythmias: Arrhythmia[];

  @OneToMany(() => MperScenario, (ms) => ms.scenario)
  mPerScenario: MperScenario[];

  @ManyToMany(() => Simulation)
  @JoinTable({
    name: 'scenariopersimulation',
    joinColumn: {
      name: 'id_simulation',
    },
    inverseJoinColumn: {
      name: 'id_scenario',
    },
  })
  simulations: Simulation[];

  @OneToMany(() => Spp, (spp) => spp.scenario)
  spp: Spp[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
