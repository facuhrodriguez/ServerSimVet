import { BaseEntity, Entity, Column,ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Scenario } from "./scenario";

@Entity()
export class Pathology extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pat: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({name: 'patologyperscenario'})
  scenario: Scenario[];
  
}
// import { QueryResult } from 'pg';
// import { PathologyI } from "../interfaces/pathologyI";
// import { connection } from './../database/db';


// export const insert = async (pat : PathologyI) => {
//     const result : QueryResult= await connection.query(`INSERT INTO "simulador".patology
//         (name, description)
//         VALUES ($1, $2)`, [pat.name, pat.description]);
//     return result;
// }

// export const get = async () => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".patology`);
//     return result.rows;
// }

// export const getById = async (id_pat : number) => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".patology
//             WHERE id_pat = $1`, [id_pat]);
//     return results.rows[0];
// }

// export const update = async (id_pat: number, pat: PathologyI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".patology SET
//         name = $2,
//         description = $3
//         WHERE id_pat = $1`, [id_pat, pat.name, pat.description]);
//     return result;
// }

// export const remove = async (id_pat: number) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".patology
//         WHERE id_pat = $1`, [id_pat]);
//     return result;

// }