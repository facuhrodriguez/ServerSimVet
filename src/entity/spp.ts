import { PhysiologicalParameter } from './physiologicalParameter';
import { AnimalSpecies } from './animalSpecies';
import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { PCurve } from './pcurve';
import { PPperAs } from './ppPerAs';
import { Scenario } from './scenario';

@Entity('spp', { schema: `${environment.DB.SCHEMA}` })
export class Spp extends BaseEntity {
  @ManyToOne(() => PPperAs, (pp) => pp.animalSpecie, { primary: true })
  @JoinColumn({ name: 'id_as' })
  animalSpecie: AnimalSpecies;

  @ManyToOne(() => PPperAs, (pp) => pp.physiologicalParameter, { primary: true })
  @JoinColumn({ name: 'id_pp' })
  physiologicalParameter: PhysiologicalParameter;

  @ManyToOne(() => Scenario, (scenario) => scenario.spp, { primary: true })
  @JoinColumn({ name: 'id_scenario' })
  scenario: Scenario;

  @Column({ type: 'varchar', nullable: true })
  refValue: string;

  // @OneToMany(() => PCurve, (pcurve) => pcurve.spp)
  // @JoinColumn()
  // pCurve: PCurve[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
