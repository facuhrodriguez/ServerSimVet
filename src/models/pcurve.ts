import { BaseEntity, Entity, Column, ManyToMany, ManyToOne, PrimaryColumn, JoinTable } from "typeorm";
import { Medication } from "./medication";
import { Scenario } from "./scenario";
import { Spp } from "./spp";

@Entity()
export class PCurve extends BaseEntity {

    @PrimaryColumn()
    @ManyToOne(() => Spp, spp => spp.pCurve)
    spp: Spp;

    @PrimaryColumn()
    t: number;

    @Column()
    value: number;

}

// import { QueryResult } from 'pg';
// import { PCurveI } from './../interfaces/pcurveI';
// import { connection } from '../database/db';


// export const insert = async (pcurve : PCurveI) => {
//     const result : QueryResult = await connection.query(`INSERT INTO "simulador".pcurve
//         VALUES ($1, $2, $3, $4, $5)`, [pcurve.id_as, pcurve.id_pp, pcurve.id_scenario, pcurve.t, pcurve.value]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".pcurve`);
//     return results.rows;
// }

// export const getById = async (pcurve: PCurveI) => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".pcurve
//     WHERE id_as = $1 AND id_pp = $2
//         AND id_scenario = $3 AND t = $4`, [pcurve.id_as, pcurve.id_pp, pcurve.id_scenario, pcurve.t]);
//     return result.rows[0];
// }

// export const update = async (value:number, id_as:number, id_scenario:number, id_pp:number,
//                             t:number) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".pcurve
//         SET value = $1
//         WHERE id_as = $2 AND id_pp = $3
//         AND id_scenario = $4 AND t = $5`,
//         [value, id_as, id_pp, id_scenario, t]);
//     return result;
// }

// export const remove = async (id_as:number, id_pp:number ,id_scenario:number, t:number) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".pcurve
//         WHERE id_as = $1 AND id_pp = $2 AND id_scenario = $3
//             AND t = $4`, [id_as, id_pp,id_scenario, t]);
//     return result;
// }