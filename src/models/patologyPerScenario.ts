// import { BaseEntity, Entity, Column, ManyToMany, PrimaryGeneratedColumn, JoinTable, PrimaryColumn } from "typeorm";
// import { Medication } from "./medication";
// import { Pathology } from "./pathology";
// import { Scenario } from "./scenario";

// @Entity()
// export class PatologyPerScenario extends BaseEntity {
//   @ManyToMany(() => Pathology)
//   @PrimaryColumn()
//   @JoinTable()
//   medications: Medication[];

//   @ManyToMany(() => Scenario) 
//   @PrimaryColumn()
//   @JoinTable()
//   scenarios: Scenario[];

  
// }


// import { QueryResult } from 'pg';
// import { PathologyPerScenarioI } from './../interfaces/pathologyPerScenarioI';
// import { connection } from './../database/db';

// export const insert = async (pat: PathologyPerScenarioI) => {
//     const result : QueryResult= await connection.query(`INSERT INTO "simulador".patologyperscenario
//         (id_scenario, id_pat)
//         VALUES ($1, $2)`, [pat.id_scenario, pat.id_pat]);
//     return result;
// }

// export const getByIdScenario = async (id_scenario: number) => {
//     const results: QueryResult = await connection.query(`SELECT * FROM "simulador".patologyperscenario
//         WHERE id_scenario = $1`, [id_scenario]);
//     return results.rows;
// }

// export const getByIdPatology = async (id_pat:number) => {
//     const results: QueryResult = await connection.query(`SELECT * FROM "simulador".patologyperscenario
//         WHERE id_pat = $1`, [id_pat]);
//     return results.rows;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".patologyperscenario`);
//     return results.rows;
// }

// export const updateScenario = async (pat: PathologyPerScenarioI) => {
//     const results : QueryResult = await connection.query(`UPDATE "simulador".patologyperscenario SET
//         id_scenario = $1
//         WHERE id_pat = $2`, [pat.id_scenario, pat.id_pat]);
//     return results;
// }

// export const updatePatology = async (pat: PathologyPerScenarioI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".patologyperscenario SET
//         id_pat = $1
//         WHERE id_scenario = $2`, [pat.id_pat, pat.id_scenario]);
//     return result;
// }

// export const deleteScenario = async (pat: PathologyPerScenarioI) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".patologyperscenario
//         WHERE id_scenario = $1`, [pat.id_scenario]);
//     return result;
// }

// export const deletePatology = async (pat: PathologyPerScenarioI) => {
//     const result = await connection.query(`DELETE FROM "simulador".patologyperscenario
//         WHERE id_pat = $1`, [pat.id_pat]);
//     return result;
// }