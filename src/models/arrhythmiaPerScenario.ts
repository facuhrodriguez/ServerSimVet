// import { Arrhythmia } from './arrhythmia';
// import {Entity, PrimaryColumn, BaseEntity, JoinTable, OneToOne, ManyToMany, JoinColumn} from "typeorm";
// import { Scenario } from './scenario';

// @Entity()
// export class ArrhythmiaPerScenario extends BaseEntity {
//     @PrimaryColumn()
//     @OneToOne(() => Arrhythmia)
//     @JoinColumn()
//     arrhythmia: Arrhythmia;

//     @PrimaryColumn()
//     @ManyToMany(() => Scenario)
//     @JoinTable()
//     scenario: Scenario[];

// }

// import { QueryResult } from 'pg';
// import { ArrhythmiaPerScenarioI } from './../interfaces/arrhythmiaPerScenarioI';
// import { connection } from './../database/db';

// export class ArrhythmiaPerScenarioModel {

//     /**
//      * Insert a new arrythmiaPerScenario.
//      * @param arr 
//      */
//     static async insert (arr: ArrhythmiaPerScenarioI) {
//         const result : QueryResult = await connection.query(`INSERT INTO "simulador".arrhythmiaperscenario
//             VALUES ($1, $2)`, [arr.id_scenario, arr.id_arr]);
//         return result;
//     }

//     /**
//      * Returns all arrhythmias. 
//      */
//     static async findAll () {
//         const results : QueryResult = await connection.query(`SELECT * FROM "simulador".arrhythmiaperscenario`);
//         return results.rows;
//     }

//     /**
//      * Returns all arrhythmias that match with id_scenario
//      * @param id 
//      */
//     static async findByIdScenario(id:number) {
//         const results : QueryResult = await connection.query(`SELECT * FROM "simulador".arrhythmiaperscenario
//             WHERE id_scenario = $1`, [id]);
//         return results.rows;
//     }

//     /**
//      * Returns all arrhythmias that match with id_arr
//      * @param id 
//      */
//     static async findByIdArr(id:number) {
//         const results : QueryResult = await connection.query(`SELECT * FROM "simulador".arrhythmiaperscenario
//             WHERE id_arr = $1`, [id]);
//         return results;
//     }

//     /**
//      * Update arrhythmia
//      * @param arr 
//      */
//     static async updateArr(arr:ArrhythmiaPerScenarioI) {
//         const result = await connection.query(`UPDATE "simulador".arrhythmiaperscenario SET
//             id_arr = $1
//             WHERE id_scenario = $2`, [arr.id_arr, arr.id_scenario]);
//         return result;
//     }

//     /**
//      * Remove the arrhythmias that match with the pararameters.
//      * @param id_arr 
//      * @param id_scenario 
//      */
//     static async delete(id_arr:number, id_scenario:number) {
//         const result : QueryResult = await connection.query(`DELETE FROM "simulador".arrhythmiaperscenario
//             WHERE id_arr = $1
//             AND id_scenario = $2`, [id_arr, id_scenario]);
//         return result;
//     }

// }


