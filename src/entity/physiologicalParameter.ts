import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Medication } from "./medication";
import { Pathology } from "./pathology";
import { PPperAs } from "./ppPerAs";
import { Scenario } from "./scenario";

@Entity('physiologicalparameter')
export class PhysiologicalParameter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pp: number;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar'})
  description: string;

  @Column({ type: 'varchar'})
  label: string;

  @Column({ type: 'varchar'})
  unit: string;

  @OneToMany(()=> PPperAs, pp => pp.animalSpecie)
  ppPerAs: PPperAs[];
  
}