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
} from 'typeorm';
import { Scenario } from './scenario';

@Entity('simulation')
export class Simulation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_simulation: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({
    name: 'scenariopersimulation',
    joinColumn: {
      name: 'id_scenario',
    },
    inverseJoinColumn: {
      name: 'id_simulation',
    },
  })
  scenario: Scenario[];

  @ManyToOne(() => AnimalSpecies, (as) => as.simulation)
  @JoinColumn({ name: 'id_as' })
  animalSpecie: AnimalSpecies;
}
