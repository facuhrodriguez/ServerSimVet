import { QueryResult } from 'pg';
import { connection } from "../database/db";
import { UserI } from "../interfaces/userI";

export const insert = async (user : UserI) => {
    const results : QueryResult = await connection.query(`INSERT INTO "simulador"."User"
        (e_mail, name, surname, password, institution)
        VALUES ($1, $2, $3, $4, $5)`, [user.email, user.name, user.surname,
            user.password, user.institution]);
    return results;
}

export const get = async () => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador"."User"`);
    return results.rows;
}

export const getById = async (email: string) => {
    const result : QueryResult = await connection.query(`SELECT * FROM "simulador"."User"
        WHERE e_mail = $1`, [email]);
    return result.rows[0];
}

export const getCredentials = async (email:string, password:string) => {
    const result = await connection.query(`SELECT * FROM "simulador"."User"
        WHERE e_mail = $1 AND password = $2`, [email, password]);
    return result.rows[0];
}

export const update = async (e_mail: string, user : UserI) => {
    const results : QueryResult = await connection.query(`UPDATE "simulador"."User" SET
            name = $2,
            surname = $3,
            password = $4,
            institution = $5
        WHERE e_mail=$1`, [e_mail, user.name, user.surname, user.password, user.institution]);
    return results;
}

export const remove = async (id_user: number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador"."User"
        WHERE id_user = $1`, [id_user]);
    return result;
}
