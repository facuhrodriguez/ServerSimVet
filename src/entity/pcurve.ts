import { BaseEntity, Entity, Column, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';

import { Spp } from './spp';

@Entity('pcurve')
export class PCurve extends BaseEntity {
  @ManyToOne(() => Spp, (spp) => spp.pCurve, { primary: true })
  spp: Spp;

  @PrimaryColumn({ type: 'numeric' })
  t: number;

  @Column({ type: 'numeric' })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
