import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('varchar')
  name: string;
  
  @Column('varchar')
  description: string;
  
  @Column('varchar')
  category: string;
  
  @Column('varchar')
  contact: string;

  @Column('double precision')
  latitude: number;
  @Column('double precision')
  longitude: number;
}
