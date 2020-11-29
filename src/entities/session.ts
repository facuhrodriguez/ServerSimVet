
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('sesion')
export class Medication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_medication: number;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar'})
  description: string;
  
}