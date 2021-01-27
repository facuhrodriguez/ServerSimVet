import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToMany,
  JoinTable,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Role } from './role';
import { environment } from '../env/enviroment';
@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ type: 'varchar', unique: true, name: 'e_mail' })
  email: string;

  @Column({ type: 'varchar' })
  name: any;

  @Column({ type: 'varchar' })
  surname: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', nullable: true })
  institution: string;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'session',
    joinColumn: {
      name: 'id_role',
    },
    inverseJoinColumn: {
      name: 'id_user',
    },
  })
  roles: Role[];

  @BeforeInsert()
  async setPassword(password: string) {
    console.log(password);
    const salt = await bcrypt.genSalt(environment.SALT_PASSWORD);
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
