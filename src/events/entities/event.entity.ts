import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Index(['name', 'type'])
@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
