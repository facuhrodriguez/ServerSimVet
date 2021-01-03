import { MperScenario } from './mPerScenario';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Scenario } from "./scenario";

@Entity('medication')
export class Medication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_medication: number;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: "varchar"})
  description: string;

  @OneToMany(() => MperScenario, mperScenario => mperScenario.medication)
  scenarios: Scenario[];
  
}