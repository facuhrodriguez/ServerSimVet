import cors from 'cors';

// Rutas
import { AnimalSpeciesRoutes } from './animalSpeciesRoutes';

import { ArrhythmiaRoutes } from './arrhythmiaRoutes';
import { MedicationRoutes } from './medicationRoutes';

import { PathologyRoutes } from './pathologyRoutes';
import { PPCurvesRoutes } from './ppCurvesRoutes';

import { ScenarioRoutes } from './scenarioRoutes';

import { SimulationRoutes } from './simulationRoutes';
import { UserRoutes } from './userRoutes';

export class Routes {
  public routes(app: any): void {
    // Options for cors midddleware
    const options: cors.CorsOptions = {
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      preflightContinue: false,
    };
    // Use cors middleware
    app.use(cors());

    app.options('*', cors(options));
    app.use('/api/auth', UserRoutes);
    app.use('/api/animalSpecies', AnimalSpeciesRoutes);
    app.use('/api/medication', MedicationRoutes);
    app.use('/api/arrhythmia', ArrhythmiaRoutes);
    app.use('/api/scenario', ScenarioRoutes);
    app.use('/api/pathology', PathologyRoutes);
    app.use('/api/simulation', SimulationRoutes);
    app.use('/api/curves', PPCurvesRoutes);
    app.use('/api/my-profile', UserRoutes);
    // app.use('/api/session', SessionRoutes);
    // app.use('/api/arrhythmiaPerScenario', ArrhythmiaPerScenarioRoutes);
    // app.use('/api/medScenario', MPerScenarioRoutes);
    // app.use('/api/pcurve', PCurveRoutes);
    // app.use('/api/physiologicalParameter', PhysiologicalParameterRoutes);
    // app.use('/api/ppPerAs', PpPerAsRoutes);
    // app.use('/api/role', RoleRoutes);
    // app.use('/api/scenarioSimulation', ScenarioPerSimulationRoutes);
  }
}
