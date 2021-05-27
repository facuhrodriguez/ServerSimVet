import { Scenario } from './scenario';

import { environment } from '../env/environment';
import { BaseEntity, Entity, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';

import { PPperAs } from './ppPerAs';

@Entity('ppcurve', { schema: `${environment.DB.SCHEMA}` })
export class PPCurve extends BaseEntity {
  @ManyToOne(() => PPperAs, (pp) => pp.curves, { primary: true })
  @JoinColumn({ name: 'id_pp', referencedColumnName: 'physiologicalParameter' })
  @JoinColumn({ name: 'id_as', referencedColumnName: 'animalSpecie' })
  ppPerAs: PPperAs;


  @ManyToOne(() => Scenario, (scenario) => scenario.id_scenario, { primary: true })
  @JoinColumn({ name: 'id_scenario' })
  scenario: Scenario;

  @Column({ type: 'numeric', primary: true })
  t: number;

  @Column({ type: 'numeric' })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
