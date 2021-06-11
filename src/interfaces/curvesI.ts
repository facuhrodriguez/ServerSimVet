export interface CurvesI {
    curveConfiguration: {
        alert_low: number;
        alert_high: number;
        label: string;
        colorLine?: string;
        rate?: string;
        unit: string;
        id_pp: number;
        name: string;
        description: string;
    },
    curveValues: number[][];
}