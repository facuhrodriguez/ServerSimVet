import { Simulation } from './simulation';
import {  PPperAs } from './ppPerAs';
import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, OneToMany} from "typeorm";

@Entity('animalspecies')
export class AnimalSpecies extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_as: number;

    @Column({type: "varchar"})
    name: string;

    @OneToMany(() => PPperAs, pp => pp.animalSpecie)
    ppPerAs: PPperAs[];

    @OneToMany(() => Simulation, sim => sim.animalSpecie)
    simulation: Simulation[];

}