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
} from 'typeorm';
import { PhysiologicalParameter } from './physiologicalParameter';
import { Spp } from './spp';
@Entity('ppperas')
export class PPperAs extends BaseEntity {
  @ManyToOne(() => AnimalSpecies, (as) => as.ppPerAs, { primary: true })
  animalSpecie: AnimalSpecies;

  @ManyToOne(() => PhysiologicalParameter, (pp) => pp.ppPerAs, { primary: true })
  physiologicalParameter: PhysiologicalParameter;

  @Column({ type: 'numeric' })
  alert_low: number;

  @Column({ type: 'numeric' })
  alert_high: number;

  @OneToMany(() => Spp, (spp) => spp.ppPerAs)
  spp: Spp[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
