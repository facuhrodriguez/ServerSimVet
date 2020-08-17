import { QueryResult } from 'pg';
import { RoleI } from './../interfaces/roleI';
import { connection } from './../database/db';


export const insert = async (role : RoleI) => {
    const results : QueryResult = await connection.query(`INSERT INTO "simulador"."role"
        (name)
        VALUES ($1)`, [role.name]);
    return results;
}

export const get = async () => {
    const results : QueryResult= await connection.query(`SELECT * FROM "simulador"."role"`);
    return results.rows;
}

export const getById = async (id_role:number) => {
    const result : QueryResult = await connection.query(`SELECT * FROM "simulador"."role"
        WHERE id_role = $1`, [id_role]);
    return result.rows[0];
}


export const update = async (id: number, role: RoleI) => {
    const results : QueryResult = await connection.query(`UPDATE "simulador"."role" SET
            name = $2
        WHERE id_role=$1`, [id, role.name]);
    return results;
}

export const remove = async (id_role:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador"."role"
        WHERE id_role = $1`, [id_role]);
    return result;
}