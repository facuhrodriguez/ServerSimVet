import { AnimalSpecies } from './animalSpecies';
import { BaseEntity, Entity, Column, ManyToMany, ManyToOne, PrimaryColumn, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Scenario } from "./scenario";

@Entity()
export class Simulation extends BaseEntity {

 @PrimaryGeneratedColumn()
 id_simulation:number;

 @Column()
 name: string;

 @Column()
 description: string;

 @ManyToMany(() => Scenario)
 @JoinTable({name: 'scenariopersimulation'})
 scenario: Scenario[];

 @ManyToOne(() => AnimalSpecies, as => as.simulation)
 animalSpecie: AnimalSpecies;


}
// import { QueryResult } from 'pg';
// import { SimulationI } from './../interfaces/simulationI';
// import { connection } from "../database/db";

// export const insert = async (sim : SimulationI) => {
//     const result : QueryResult = await connection.query(`INSERT INTO "simulador".simulation
//         (name, description, id_as)
//         VALUES ($1, $2, $3)`, [sim.name, sim.description, sim.id_as]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".simulation`);
//     return results.rows;
// }

// export const getById = async (id_simulation : number) => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".simulation
//         WHERE id_simulation = $1`, [id_simulation]);
//     return result.rows[0];
// }

// export const update = async (id_simulation:number, s: SimulationI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".simulation SET
//         name = $2,
//         description = $3,
//         id_as = $4
//         WHERE id_simulation = $1`, [id_simulation, s.name, s.description, s.id_as]);
//     return result;
// }

// export const remove = async (id_simulation:number) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".simulation
//         WHERE id_simulation = $1`, [id_simulation]);
//     return result;
// }
