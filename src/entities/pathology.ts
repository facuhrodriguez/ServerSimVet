import { BaseEntity, Entity, Column,ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Scenario } from "./scenario";

@Entity('patology')
export class Pathology extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pat: number;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'varchar'})
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({name: 'patologyperscenario'})
  scenario: Scenario[];
  
}
