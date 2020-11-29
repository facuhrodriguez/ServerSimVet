import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable } from "typeorm";
import { Role } from './role';
@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({type: 'varchar', unique: true, name: 'e_mail' })
  email: string;

  @Column({ type: 'varchar'})
  name: any;

  @Column({ type: 'varchar'})
  surname: string;

  @Column({ type: 'varchar'})
  password: string;

  @Column({ type: 'varchar', nullable: true })
  institution: string;

  @ManyToMany(() => Role)
  @JoinTable({ name: 'session' })
  roles: Role[];
  
}
