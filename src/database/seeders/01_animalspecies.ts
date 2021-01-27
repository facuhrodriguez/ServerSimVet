// import { AnimalSpecies } from '../entity/animalSpecies';
// import { getManager, EntityManager, ObjectID } from 'typeorm';

// import { DatabaseConfig } from './../db';
// import { AnimalSpeciesRepository } from '../../../repositories/AnimalSpeciesRepository';

// return DatabaseConfig.connection().then(() => {
//   const queryRunner = DatabaseConfig.getconnection();

//   const values = [
//     {
//       name: 'Equino',
//       description: 'Test',
//     },
//     {
//       name: 'Canino',
//       description: 'Canino hasta 20kg',
//     },
//   ];

//   values.forEach(async (element) => {
//     await AnimalSpeciesRepository.create(element);
//   });

//   // queryRunner.query(`INSERT INTO animalspecies ` )
// });
