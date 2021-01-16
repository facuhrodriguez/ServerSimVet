import { Simulation } from "./../../entity/simulation";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class Simulation1609703796143 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("simulation", "animalSpecieIdAs", "id_as");
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("simulation", "id_as", "animalSpecieIdAs");
  }
}
