import { Pathology } from './pathology';
import { MperScenario } from './mPerScenario'
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Arrhythmia } from './arrhythmia';
import { Spp } from './spp';

@Entity()
export class Scenario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_scenario: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Pathology)
  @JoinTable({ name: 'pahologyperscenario'})
  pathologies: Pathology[];

  @ManyToMany(() => Arrhythmia)
  @JoinTable({ name: 'arrhythmiaperscenario'})
  arrhythmias: Arrhythmia[];

  @OneToMany(() => MperScenario, ms => ms.scenario)
  mPerScenario: MperScenario[];

  @OneToMany(() => Spp, spp => spp.scenario)
  spp: Spp[];
  
}

// import { QueryResult } from 'pg';
// import { ScenarioI } from './../interfaces/scenarioI';
// import { connection } from './../database/db';


// export const insert = async (sc : ScenarioI) => {
//     const result : QueryResult = await connection.query(`INSERT INTO "simulador".scenario
//         (name, description)
//         VALUES ($1, $2)`, [sc.name, sc.description]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".scenario`);
//     return results.rows;
// }

// export const getById = async (id:number) => {
//     const result = await connection.query(`SELECT * FROM "simulador".scenario
//         WHERE id_scenario = $1`, [id]);
//     return result.rows[0];
// }

// export const update = async (id:number , sc : ScenarioI) => {
//     const result : QueryResult= await connection.query(`UPDATE "simulador".scenario SET
//         name = $1,
//         description = $2
//         WHERE id_scenario = $3`, [sc.name, sc.description, id]);
//     return result;
// }

// export const remove = async (id:number) => {
//     const result : QueryResult= await connection.query(`DELETE FROM "simulador".scenario
//         WHERE id_scenario = $1`, [id]);
//     return result;
// }