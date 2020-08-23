import { QueryResult } from 'pg';
import { SessionI } from '@interfaces/sessionI';
import { connection } from "../database/db";

export const insert = async (s : SessionI) => {
    const result : QueryResult= await connection.query(`INSERT INTO "simulador".session
        (id_user, id_role)
        VALUES ($1, $2)`, [s.id_user, s.id_role]);
    return result;
}

export const get = async () => {
    const results : QueryResult = await connection.query(`SELECT * FROM Session`);
    return results.rows;
}

export const getByIdUser = async (id_user:number) => {
    const result : QueryResult = await connection.query(`SELECT * FROM Session
        WHERE id_user = $1`, [id_user]);
    return result.rows;
}

export const getByIdRole = async (id_role:number) => {
    const result : QueryResult = await connection.query(`SELECT * FROM Session
        WHERE id_role = $1`, [id_role]);
    return result.rows;
}

export const updateUser = async (id_user:number, id_role:number) => {
    const result = await connection.query(`UPDATE Session SET
            id_role = $2
        WHERE id_user = $1`, [id_user, id_role]);
    return result;
}

export const updateRole = async (id_role:number, id_user:number) => {
    const result : QueryResult= await connection.query(`UPDATE Session SET
        id_user = $2
        WHERE id_role = $1`, [id_role, id_user]);
    return result;
}

export const deleteUser = async (id_user:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM Session
        WHERE id_user = $1`, [id_user]);
    return result;
}

export const deleteRole = async (id_role:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM Session
        WHERE id_role = $1`, [id_role]);
    return result;
}

export const remove = async (s : SessionI) => {
    const result : QueryResult = await connection.query(`DELETE FROM Session
        WHERE id_role = $1
            AND id_user = $2`, [s.id_role, s.id_user]);
    return result;
}
