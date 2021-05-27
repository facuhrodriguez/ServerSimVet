import { AnimalSpecieI } from "./animalSpecieI";
import { CurvesI } from "./curvesI";

export interface StatesI {
    state: Number,
    animalSpecie: AnimalSpecieI;
    curves: CurvesI[];
}