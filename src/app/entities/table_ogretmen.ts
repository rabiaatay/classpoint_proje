import { Entity, Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity('Table_Ogretmen')
export class Table_Ogretmen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ogretmen_ad: string;

  @Column()
  ogretmen_soyad: string;

  @Column()
  ogretmen_mail: string;

  @Column()
  ogretmen_sifre: string;
}
