import {createConnection, getConnection} from "typeorm";

export class DatabaseConfig {
    static async connection() {
        try {
            await createConnection();
        } catch (err) {
            console.log(err);
        }
    }

    static getconnection() {
        return getConnection();
    }

}

