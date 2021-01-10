import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

// Rutas
import { AnimalSpeciesRoutes } from "./animalSpeciesRoutes";
import { ArrhythmiaPerScenarioRoutes } from './arrhythmiaPerScenarioRoutes';
import { ArrhythmiaRoutes } from './arrhythmiaRoutes';
import { MedicationRoutes } from './medicationRoutes';
import { MPerScenarioRoutes } from './mPerScenarioRoutes';
import { PathologyRoutes } from './pathologyRoutes';
import { PCurveRoutes } from './pCurveRoutes';
import { PhysiologicalParameterRoutes } from './physiologicalParameterRoutes';
import { PpPerAsRoutes } from './ppPerAsRoutes';
import { RoleRoutes } from './roleRoutes';
import { ScenarioPerSimulationRoutes } from './scenarioPerSimulationRoutes';
import { ScenarioRoutes } from './scenarioRoutes';
import { SessionRoutes } from './sessionRoutes';
import { SimulationRoutes } from './simulationRoutes';
import { SppRoutes } from './sppRoutes';
import { UserRoutes } from './userRoutes';

export class Routes {
    public routes(app:any): void {
         // Options for cors midddleware
         const options: cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
        };
        // Use cors middleware
        app.use(cors());

        app.options("*", cors(options));
        app.use('/api/auth', UserRoutes);
        app.use('/api/animalSpecies', AnimalSpeciesRoutes);
        app.use('/api/medication', MedicationRoutes);
        app.use('/api/arrhythmia', ArrhythmiaRoutes);
        app.use('/api/scenario', ScenarioRoutes);
        app.use('/api/pathology', PathologyRoutes);
        // app.use('/api/simulation', SimulationRoutes);
        // app.use('/api/session', SessionRoutes);
        // app.use('/api/arrhythmiaPerScenario', ArrhythmiaPerScenarioRoutes);
        // app.use('/api/medScenario', MPerScenarioRoutes);
        // app.use('/api/pcurve', PCurveRoutes);
        // app.use('/api/physiologicalParameter', PhysiologicalParameterRoutes);
        // app.use('/api/ppPerAs', PpPerAsRoutes);
        // app.use('/api/role', RoleRoutes);
        // app.use('/api/scenarioSimulation', ScenarioPerSimulationRoutes);
        // app.use('/api/spp', SppRoutes);
    }
}