import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('Table_Paylasim')
export class Table_Paylasim {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paylasim_text: string;

  @Column()
  paylasilan_sinif_id: string;

  @Column()
  paylasan_kisi_id: string;

  @Column()
  paylasan_kisi_mail: string;

  @Column()
  paylasim_tarih: string;


}