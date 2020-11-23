import { PhysiologicalParameter } from './physiologicalParameter';
import {Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToMany, JoinTable} from "typeorm";

@Entity()
export class AnimalSpecies extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_as: number;

    @Column()
    name: string;

    @ManyToMany(() => PhysiologicalParameter)
    @JoinTable({name: 'PPperAs'})
    physilogicalParameters: PhysiologicalParameter[];

}

// import { connection } from "../database/db";
// import { QueryResult } from "pg";
// import  {AnimalSpecieI}  from "../interfaces/AnimalSpecieI";

// export const insert = async (as : AnimalSpecieI) => {
//     const result: QueryResult = await connection.query(`INSERT INTO "simulador".animalspecies
//         (name) VALUES ($1)`, [as.name]);
//     return result;
// }

// export const get = async () => {
//     const results: QueryResult = await connection.query(`SELECT * FROM "simulador".animalspecies`);
//     return results.rows;
// }

// export const getById = async (id: number) => {
//     const result : QueryResult = await connection.query(`SELECT * FROM "simulador".animalspecies
//     WHERE id_as = $1`, [id]);
//     return result.rows[0];
// }

// export const update = async (id_as : number, animalSpecie: AnimalSpecieI) => {
//     const result : QueryResult = await connection.query(`UPDATE "simulador".animalspecies SET
//         name = $2
//         WHERE id_as = $1`, [id_as, animalSpecie.name]);
//     return result;
// }

// export const remove = async (id_as : number) => {
//         const result : QueryResult= await connection.query(`DELETE FROM "simulador".animalspecies
//             WHERE id_as = $1`, [id_as]);
//         return result;
// }