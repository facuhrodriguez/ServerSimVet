import { AnimalSpecies } from './animalSpecies';
import { BaseEntity, Entity, Column, ManyToMany, ManyToOne, PrimaryColumn, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Scenario } from "./scenario";

@Entity('simulation')
export class Simulation extends BaseEntity {

 @PrimaryGeneratedColumn()
 id_simulation:number;

 @Column({ type: 'varchar'})
 name: string;

 @Column({ type: 'varchar'})
 description: string;

 @ManyToMany(() => Scenario)
 @JoinTable({name: 'scenariopersimulation'})
 scenario: Scenario[];

 @ManyToOne(() => AnimalSpecies, as => as.simulation)
 animalSpecie: AnimalSpecies;
 
}