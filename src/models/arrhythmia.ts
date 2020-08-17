import { connection } from "../database/db";
import { QueryResult } from "pg";
import { ArrhythmiaI } from "../interfaces/arrhythmiaI";

export const insert = async (arrhythmia: ArrhythmiaI)  => {
    const results : QueryResult = await connection.query(`INSERT INTO "simulador".arrhytmia
        (name, description) VALUES ($1,$2)`, [arrhythmia.name, arrhythmia.description]);
    return results;
}

export const get = async () => {
    const results : QueryResult = await connection.query(`SELECT id_arr, name, description
        FROM "simulador".arrhytmia`);
    return results.rows;
}

export const getById = async (id: number) => {
    const results : QueryResult = await connection.query(`SELECT id_arr, name, description
                    FROM "simulador".arrhytmia
                    WHERE id_arr = $1`, [id]);
    return results.rows[0];
}

export const update = async (id_arr: number, arrhythmia : ArrhythmiaI) => {
    const results : QueryResult = await connection.query(`UPDATE "simulador".arrhytmia SET
        name=$1,
        description=$2
        WHERE id_arr = $3`, [arrhythmia.name, arrhythmia.description, id_arr]);
    return results;
}

export const remove = async (id:number) => {
        const results = await connection.query(`DELETE FROM "simulador".arrhytmia
            WHERE id_arr = $1`, [id]);
        return results;
}
