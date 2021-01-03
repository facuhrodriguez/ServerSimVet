import { BaseEntity, Entity, Column, ManyToOne, PrimaryColumn, OneToMany } from "typeorm";
import { PCurve } from "./pcurve";
import { PPperAs } from "./ppPerAs";
import { Scenario } from "./scenario";

@Entity('spp')
export class Spp extends BaseEntity {

    @ManyToOne(() => PPperAs, pp => pp.spp, {primary: true})
    ppPerAs: PPperAs;

    @ManyToOne(() => Scenario, scenario => scenario.spp, {primary: true})
    scenario: Scenario;

    @Column({type: 'varchar', nullable: true})
    refValue: string;

    @OneToMany(() => PCurve, pcurve => pcurve.spp)
    pCurve : PCurve[];

}