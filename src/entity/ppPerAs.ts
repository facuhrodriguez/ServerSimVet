import { AnimalSpecies } from './animalSpecies';
import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { PhysiologicalParameter } from './physiologicalParameter';
import { Spp } from './spp';
import { environment } from '../env/environment';
@Entity('ppperas', { schema: `${environment.DB.SCHEMA}` })
export class PPperAs extends BaseEntity {
  @ManyToOne(() => AnimalSpecies, (as) => as.ppPerAs, { primary: true })
  @JoinColumn({ name: 'id_as' })
  animalSpecie: AnimalSpecies;

  @ManyToOne(() => PhysiologicalParameter, (pp) => pp.ppPerAs, { primary: true })
  @JoinColumn({ name: 'id_pp' })
  physiologicalParameter: PhysiologicalParameter;

  @Column({ type: 'numeric' })
  alert_low: number;

  @Column({ type: 'numeric' })
  alert_high: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
