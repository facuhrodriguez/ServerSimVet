import { PhysiologicalParameter } from './physiologicalParameter';
import { AnimalSpecies } from './animalSpecies';
import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';

import { Spp } from './spp';

@Entity('pcurve', { schema: `${environment.DB.SCHEMA}` })
export class PCurve extends BaseEntity {
  @ManyToOne(() => Spp, (spp) => spp.animalSpecie, { primary: true })
  @JoinColumn({ name: 'id_as' })
  animalSpecie: AnimalSpecies;

  @ManyToOne(() => Spp, (spp) => spp.physiologicalParameter, { primary: true })
  @JoinColumn({ name: 'id_pp' })
  physiologicalParameter: PhysiologicalParameter;

  @Column({ type: 'numeric', primary: true })
  t: number;

  @Column({ type: 'numeric' })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
