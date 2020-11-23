// import { QueryResult } from 'pg';
// import { PPperASI } from './../interfaces/ppPerAsI';
// import { connection } from "../database/db";

// export const insert = async (pp : PPperASI) => {
//     const result : QueryResult = await connection.query(`INSERT INTO "simulador".ppperas
//         (id_as, id_pp, alarm_low, alarm_high)
//         VALUES ($1, $2, $3, $4)`, [pp.id_as, pp.id_pp, pp.alarm_low, pp.alarm_high]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".ppperas`);
//     return results.rows;
// }

// export const getById = async (id_as:number, id_pp:number) => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".ppperas
//         WHERE id_as = $1 AND id_pp = $2`, [id_as, id_pp]);
//     return result.rows[0];
// }

// export const update = async (id_as: number, pp: PPperASI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".ppperas SET
//         alarm_low = $3,
//         alarm_high = $4
//         WHERE id_as = $1 AND id_pp = $2`, [id_as, pp.id_pp, pp.alarm_low, pp.alarm_high]);
//     return result;
// }

// export const remove = async (id_as:number, id_pp:number) => {
//     const result : QueryResult= await connection.query(`DELETE FROM "simulador".ppperas
//         WHERE id_as = $1 AND id_pp = $2`, [id_as, id_pp]);
//     return result;
// }

