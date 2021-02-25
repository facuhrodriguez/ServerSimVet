import { AnimalSpecies } from './animalSpecies';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Scenario } from './scenario';
import { environment } from '../env/environment';

@Entity('simulation', { schema: `${environment.DB.SCHEMA}` })
export class Simulation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_simulation: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Scenario, { cascade: ['insert', 'update'] })
  @JoinTable({
    name: 'scenariopersimulation',
    joinColumn: {
      name: 'id_scenario',
    },
    inverseJoinColumn: {
      name: 'id_simulation',
    },
  })
  scenarios: Scenario[];

  @ManyToOne(() => AnimalSpecies, (as) => as.simulation, { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'id_as' })
  animalSpecie: AnimalSpecies;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
