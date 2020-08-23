import { QueryResult } from 'pg';
import { ScenarioPerSimulationI } from './../interfaces/scenarioPerSimulationI';
import { connection } from './../database/db';


export const insert = async (sc : ScenarioPerSimulationI) => {
    const result : QueryResult = await connection.query(`INSERT INTO "simulador".scenariopersimulation
        (id_scenario, id_simulation)
        VALUES ($1, $2)`, [sc.id_scenario, sc.id_simulation]);
    return result;
}

export const get = async () => {
    const result : QueryResult = await connection.query(`SELECT * FROM "simulador".scenariopersimulation`);
    return result.rows;
}

export const getByScenario = async(id:number) => {
    const results : QueryResult = await connection.query(`SELECT * FROM "simulador".scenariopersimulation
        WHERE id_scenario = $1`, [id]);
    return results.rows;
}

export const getBySimulation = async (id:number) => {
    const results : QueryResult= await connection.query(`SELECT * FROM "simulador".scenariopersimulation
        WHERE id_simulation = $1`, [id]);
    return results.rows;
}

export const updateScenario = async (id_scenario:number, id_simulation:number) => {
    const result : QueryResult = await connection.query(`UPDATE "simulador".scenariopersimulation SET
        id_scenario = $1
        WHERE id_simulation = $2`, [id_scenario, id_simulation]);
    return result;
}

export const updateSimulation = async (id_scenario: number, id_simulation: number) => {
    const result = await connection.query(`UPDATE "simulador".scenariopersimulation SET
        id_simulation = $1
        WHERE id_scenario = $2`, [id_simulation, id_scenario]);
    return result;
}

export const deleteSimulation = async (id_scenario:number ) => {
    const result : QueryResult= await connection.query(`DELETE FROM "simulador".scenariopersimulation
        WHERE id_scenario = $1`, [id_scenario]);
    return result;
}

export const remove = async (id_scenario:number, id_simulation:number) => {
    const result : QueryResult = await connection.query(`DELETE FROM "simulador".scenariopersimulation
        WHERE id_scenario = $1 AND id_simulation = $2`, [id_scenario, id_simulation]);
    return result;
}

export const removeScenario = async (id_simulation: number) => {
    const result = await connection.query(`DELETE FROM "simulador".scenariopersimulation
        WHERE id_simulation = $1`, [id_simulation]);
    return result;
}
