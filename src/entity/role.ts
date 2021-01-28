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

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_role: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'session',
    joinColumn: {
      name: 'id_user',
    },
    inverseJoinColumn: {
      name: 'id_role',
    },
  })
  users: User;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
