import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('Table_Ogrenci')
export class Table_Ogrenci {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ogrenci_ad: string;

  @Column()
  ogrenci_soyad: string;

  @Column()
  ogrenci_mail: string;

  @Column()
  ogrenci_sifre: string;
}
