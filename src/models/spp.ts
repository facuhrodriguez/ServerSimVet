import { QueryResult } from 'pg';
import { SppI } from './../interfaces/sppI';
import { connection } from '../database/db';

export const insert = async (spp : SppI) => {
    const result : QueryResult = await connection.query(`INSERT INTO "simulador".spp
        (id_as, id_pp, id_scenario)
        VALUES ($1, $2, $3)`, [spp.id_as, spp.id_pp, spp.id_scenario]);
    return result;
}

export const get = async () => {
    const results : QueryResult= await connection.query(`SELECT * FROM "simulador".spp`);
    return results.rows;
}

export const getByIdAs = async (id_as:number) => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador".spp
        WHERE id_as = $1`, [id_as]);
    return results.rows;
}

export const getByIdPp = async (id_pp:number) => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador".spp
        WHERE id_pp = $1`, [id_pp]);
    return results.rows;
}

export const getByIdScenario = async (id_scenario:number) => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador".spp
        WHERE id_scenario = $1`, [id_scenario]);
    return results.rows;
}

export const updateScenario = async (id_as:number, id_pp:number, id_scenario:number) => {
    const result : QueryResult = await connection.query(`UPDATE "simulador".spp SET
        id_as = $1,
        id_pp = $2
        WHERE id_scenario = $3`, [id_as, id_pp, id_scenario]);
    return result;
}

export const updatePP = async (id_as:number, id_pp:number, id_scenario:number) => {
    const result : QueryResult = await connection.query(`UPDATE "simulador".spp SET
        id_as = $1,
        id_scenario = $2
        WHERE id_pp = $3`, [id_as, id_scenario, id_pp]);
    return result;
}

export const updateAS = async (id_as:number, id_pp:number, id_scenario:number) => {
    const result : QueryResult = await connection.query(`UPDATE "simulador".spp SET
        id_pp = $1,
        id_scenario = $2
        WHERE id_as = $3`, [id_pp, id_scenario, id_as]);
    return result;
}

export const deleteAs = async (id_as:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador".spp
        WHERE id_as = $1`, [id_as]);
    return result;
}

export const deleteScenario = async (id_scenario:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador".spp
        WHERE id_scenario = $1`, [id_scenario]);
    return result;
}

export const deletePp = async (id_pp:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador".spp
        WHERE id_pp = $1`, [id_pp]);
    return result;
}

export const remove = async (id_pp:number, id_as:number, id_scenario:number) => {
    const result = await connection.query(`DELETE FROM "simulador".spp
        WHERE id_as = $1 AND id_pp = $2
            AND id_scenario = $3`, [id_pp, id_as, id_scenario]);
    return result;
}
