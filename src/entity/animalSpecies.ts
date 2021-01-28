import { Simulation } from './simulation';
import { PPperAs } from './ppPerAs';
import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('animalspecies')
export class AnimalSpecies extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_as: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @OneToMany(() => PPperAs, (pp) => pp.animalSpecie)
  ppPerAs: PPperAs[];

  @OneToMany(() => Simulation, (sim) => sim.animalSpecie)
  simulation: Simulation[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
