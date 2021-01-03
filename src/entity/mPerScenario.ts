import { BaseEntity, Entity, Column, ManyToMany, ManyToOne, PrimaryColumn, JoinTable } from "typeorm";
import { Medication } from "./medication";
import { Scenario } from "./scenario";

@Entity('mperscenario')
export class MperScenario extends BaseEntity {

  @Column({type: "numeric"})
  dose: number;

  @Column({ type: "varchar"})
  unit: string;

  @ManyToOne(() => Medication, medication => medication.scenarios, {primary: true})
  medication: Medication;

  @ManyToOne(() => Scenario, scenario => scenario.mPerScenario, {primary: true})
  scenario: Scenario[];

}