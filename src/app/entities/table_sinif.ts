import { Entity, Column,PrimaryGeneratedColumn, JoinTable, ManyToMany} from 'typeorm';
import { CommonEntity } from './CommonEntity';

@Entity('Table_Sinif')
export class Table_Sinif {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sinif_ad: string;

  @Column()
  sinif_bolum: string;

  @Column()
  sinif_kod: string;

  @Column()
  sinif_olusturan_id: string;

  @Column()
  sinif_olusturan_ogretmen: string;

  @Column()
  renk: string;
}