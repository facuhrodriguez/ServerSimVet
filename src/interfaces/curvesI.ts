import { AnimalSpecieI } from "./animalSpecieI";
import { CurveValuesI } from "./curveValuesI";

export interface CurvesI {
    curveConfiguration: {
        alert_low: number;
        alert_high: number;
        label: string;
        colorLine?: string;
        unit: string;
        id_pp: number;
        name: string;
        description: string;
    },
    curveValues: number[][];
    animalSpecie: AnimalSpecieI;
}