import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AnimalSpecies1609703796143 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("animalspecies", new TableColumn({
        name: "description",
        type: "varchar",
        isNullable: true
    }));
      
  }

  async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn("animalspecies", 'description');
  }
}
