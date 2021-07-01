import { PPCurve } from "../entity/ppcurve";
import { AnimalSpecieI } from "../interfaces/animalSpecieI";
import { CurvesI } from "../interfaces/curvesI";
import { CurveValuesI } from "../interfaces/curveValuesI";
import { StatesI } from "../interfaces/statesI";
import { BaseFormat } from "./baseFormat";

export class PPCurvesFormatQuery extends BaseFormat {

    constructor(query: any) {
        super(query);
    }

    public formatQuery(): StatesI | null {
        let state: StatesI;
        const prunedQueryValues: CurvesI[] = new Array<CurvesI>();
        let auxValues: CurvesI;

        if (this.query.data && this.query.data.length > 0) {
            const id_scenario: number = this.query.data[0]?.curves[0]?.scenario?.id_scenario ?
                this.query.data[0]?.curves[0]?.scenario?.id_scenario : null;
            const animalSpecie: AnimalSpecieI = this.query?.data[0]?.animalSpecie;
            this.query.data.forEach((data: any) => {

                auxValues = {
                    curveConfiguration: {
                        alert_low: data.alert_low,
                        alert_high: data.alert_high,
                        label: data.physiologicalParameter.label,
                        unit: data.physiologicalParameter.unit,
                        id_pp: data.physiologicalParameter.id_pp,
                        name: data.physiologicalParameter.name,
                        description: data.physiologicalParameter.description,
                        colorLine: data.physiologicalParameter?.colorLine,
                        rate: data.physiologicalParameter?.rate
                    },
                    curveValues: this.formatCurveValues(data.curves),
                }
                prunedQueryValues.push(auxValues);
            });
            if (animalSpecie.id_as) {
                state = {
                    state: animalSpecie.id_as + id_scenario,
                    animalSpecie: animalSpecie,
                    curves: prunedQueryValues,
                }

                return state;
            }
        }
        return null;
    }

    private formatCurveValues(curves: PPCurve[]): CurveValuesI {
        let newCurves: CurveValuesI = {
            t: [],
            value: []
        };
        curves.forEach((data: PPCurve) => {
            newCurves.t.push(+data.t);
            newCurves.value.push(+data.value);
        });
        return newCurves;
    }



    // private formatCurveValues(curves: any[]): number[] {
    //     let curvesPruned: CurveValuesI[] = [];
    //     curves.forEach((curveValue: any) => {
    //         curvesPruned.push(+ curveValue.t);
    //     })

    //     return curvesPruned;
    // }



}