import { CurvesI } from "../interfaces/curvesI";
import { BaseFormat } from "./baseFormat";

export class PPCurvesFormatQuery extends BaseFormat {

    constructor(query: any) {
        super(query);
    }

    public formatQuery(): Array<CurvesI> {
        const prunedQueryValues: CurvesI[] = new Array<CurvesI>();
        let auxValues: CurvesI;
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
                },
                animalSpecie: data.animalSpecie,
                curveValues: this.formatCurveValues(data.curves),
            }
            prunedQueryValues.push(auxValues);
        });

        return prunedQueryValues;
    }



    private formatCurveValues(curves: any[]): number[][] {
        let curvesPruned: number[][] = [];
        curves.forEach((curveValue: any) => {
            curvesPruned.push([ curveValue.t, curveValue.value ]);
        })

        return curvesPruned;
    }



}