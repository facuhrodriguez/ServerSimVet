import { MperScenario } from './mPerScenario';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Scenario } from "./scenario";

@Entity()
export class Medication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_medication: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => MperScenario, mperScenario => mperScenario.medication)
  scenarios: Scenario[];
  
}

// import { connection } from "../database/db";
// import { QueryResult } from "pg";
// import { MedicationI } from "../interfaces/medicationI";

// export const insert = async (med : MedicationI) => {
//     const result : QueryResult= await connection.query(`INSERT INTO "simulador".medication
//         (name, description)
//         VALUES
//         ($1, $2)`, [med.name, med.description]);
//     return result;
// }

// export const get = async () => {
//     const results : QueryResult = await connection.query(`SELECT * FROM "simulador".medication`);
//     return results.rows;
// }

// export const getById = async (id_med:number) => {
//     const result : QueryResult = await connection.query(`SELECT id_medication, name, description
//         FROM "simulador".medication
//         WHERE id_medication = $1`, [id_med]);
//     return result.rows[0];
// }

// export const update = async (id_med : number, med: MedicationI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".medication SET
//         name = $2,
//         description = $3
//         WHERE id_medication = $1`, [id_med, med.name, med.description]);
//     return result;
// }

// export const remove = async (id_med : number) => {
//     const result : QueryResult = await connection.query(`DELETE FROM "simulador".medication
//         WHERE id_medication = $1`, [id_med]);
//     return result;
// }
