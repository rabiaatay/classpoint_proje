import { Entity, Column,PrimaryGeneratedColumn, JoinTable, ManyToMany} from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('Table_Soru_Turu')
export class Table_Soru_Turu {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sinav_id: string;

  @Column()
  soru_turu: string;


}