import { Pathology } from './pathology';
import { MperScenario } from './mPerScenario';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Arrhythmia } from './arrhythmia';
import { Spp } from './spp';

@Entity('scenario')
export class Scenario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_scenario: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Pathology)
  @JoinTable({ name: 'pahologyperscenario' })
  pathologies: Pathology[];

  @ManyToMany(() => Arrhythmia)
  @JoinTable({ name: 'arrhythmiaperscenario' })
  arrhythmias: Arrhythmia[];

  @OneToMany(() => MperScenario, (ms) => ms.scenario)
  mPerScenario: MperScenario[];

  @OneToMany(() => Spp, (spp) => spp.scenario)
  spp: Spp[];
}
