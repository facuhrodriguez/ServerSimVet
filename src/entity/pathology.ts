import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Scenario } from './scenario';

@Entity('patology', { schema: `${environment.DB.SCHEMA}` })
export class Pathology extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_pat: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToMany(() => Scenario)
  @JoinTable({
    name: 'pathologyperscenario',
    joinColumn: {
      name: 'id_pat',
    },
    inverseJoinColumn: {
      name: 'id_scenario',
    },
  })
  scenario: Scenario[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
