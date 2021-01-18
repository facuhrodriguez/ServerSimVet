import {
  BaseEntity,
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_role: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'session' })
  users: User;
}
