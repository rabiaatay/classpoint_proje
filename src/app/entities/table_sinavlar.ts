import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('Table_Sinavlar')
export class Table_Sinavlar {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sinav_baslik: string;

  @Column()
  sinav_tarih: string;

  @Column()
  sinav_saat: string;

  @Column()
  sinav_sure: string;

  @Column()
  sinav_olusturan_id: number;



}