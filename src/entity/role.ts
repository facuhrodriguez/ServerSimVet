import { environment } from '../env/environment';
import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user';

@Entity('role', { schema: `${environment.DB.SCHEMA}` })
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_role!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'session',
    joinColumn: {
      name: 'id_role',
    },
    inverseJoinColumn: {
      name: 'id_user',
    },
  })
  users!: User[];

  @CreateDateColumn()
  created_at!: Date;

  @CreateDateColumn()
  updated_at!: Date;
}
