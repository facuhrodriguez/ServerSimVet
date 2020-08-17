import { QueryResult } from 'pg';
import { MPerScenarioI } from './../interfaces/mPerScenarioI';
import { connection } from './../database/db';


export const insert = async (mp : MPerScenarioI) => {
    const result : QueryResult = await connection.query(`INSERT INTO "simulador".mperscenario
        VALUES ($1, $2, $3, $4)`, [mp.id_scenario, mp.id_med, mp.dose, mp.unit]);
    return result;
}

export const get = async () => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador".mperscenario`);
    return results.rows;
}

export const getById = async (id_scenario: number, id_medication: number) => {
    const result : QueryResult = await connection.query(`SELECT * FROM "simulador".mperscenario
        WHERE id_scenario = $1 AND id_medication = $2`, [id_scenario, id_medication]);
    return result.rows[0];
}

export const update = async (mp : MPerScenarioI, id_scenario:number, id_medication: number) => {
    const result : QueryResult = await connection.query(`UPDATE "simulador".mperscenario SET
            dose = $1,
            unit = $2
            WHERE id_scenario = $3 AND id_medication = $4`,
            [mp.dose, mp.unit, id_scenario, id_medication]);
    return result;
}

export const remove = async (id_scenario:number, id_med: number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador".mperscenario
        WHERE id_scenario = $1 AND id_medication = $2`, [id_scenario, id_med]);
    return result;
}
