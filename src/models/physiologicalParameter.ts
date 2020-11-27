import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Medication } from "./medication";
import { Pathology } from "./pathology";
import { PPperAs } from "./ppPerAs";
import { Scenario } from "./scenario";

@Entity()
export class PhysiologicalParameter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pp: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  label: string;

  @Column()
  unit: string;

  @OneToMany(()=> PPperAs, pp => pp.animalSpecie)
  ppPerAs: PPperAs[];
  
}

// import { QueryResult } from 'pg';
// import { PhysiologicalParameterI } from './../interfaces/physiologicalParameterI';
// import { connection } from './../database/db';

// export const insert = async (pp: PhysiologicalParameterI) => {
//     const result : QueryResult = await connection.query(`INSERT INTO "simulador".physiologicalparameter
//             (name, description, label, unit)
//             VALUES ($1, $2, $3, $4)`, [pp.name, pp.description, pp.label, pp.unit]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".physiologicalparameter`);
//     return results.rows;
// }

// export const getById = async (id: number) => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".physiologicalparameter
//         WHERE id_pp = $1`, [id]);
//     return result.rows[0];
// }

// export const update = async (id_pp: number, pp : PhysiologicalParameterI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".physiologicalparameter SET
//             name = $2,
//             description = $3,
//             label = $4,
//             unit = $5
//             WHERE id_pp = $1`, [id_pp, pp.name, pp.description, pp.label, pp.unit]);
//         return result;
// }

// export const remove = async (id_pp : number) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".physiologicalparameter
//         WHERE id_pp = $1`, [id_pp]);
//     return result;
// }
