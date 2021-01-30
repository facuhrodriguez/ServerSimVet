import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { PCurve } from './pcurve';
import { PPperAs } from './ppPerAs';
import { Scenario } from './scenario';

@Entity('spp', { schema: `${environment.DB.SCHEMA}` })
export class Spp extends BaseEntity {
  @ManyToOne(() => PPperAs, (pp) => pp.spp, { primary: true })
  ppPerAs: PPperAs;

  @ManyToOne(() => Scenario, (scenario) => scenario.spp, { primary: true })
  scenario: Scenario;

  @Column({ type: 'varchar', nullable: true })
  refValue: string;

  @OneToMany(() => PCurve, (pcurve) => pcurve.spp)
  pCurve: PCurve[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
