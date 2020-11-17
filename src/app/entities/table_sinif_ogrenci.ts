import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('Table_Sinif_Ogrenci')
export class Table_Sinif_Ogrenci {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sinif_ogrenci_id: string;

  @Column()
  sinif_ogrenci_sinif_id: string;


}