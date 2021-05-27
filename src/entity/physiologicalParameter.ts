import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Medication } from './medication';
import { Pathology } from './pathology';
import { PPperAs } from './ppPerAs';
import { Scenario } from './scenario';

@Entity('physiologicalparameter', { schema: `${environment.DB.SCHEMA}` })
export class PhysiologicalParameter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pp: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  label: string;

  @Column({ type: 'varchar' })
  unit: string;

  @Column({ type: 'varchar', nullable: true })
  colorLine: string;

  @OneToMany(() => PPperAs, (pp) => pp.animalSpecie)
  ppPerAs: PPperAs[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
