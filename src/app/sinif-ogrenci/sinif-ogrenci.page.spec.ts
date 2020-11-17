import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinifOgrenciPage } from './sinif-ogrenci.page';

describe('SinifOgrenciPage', () => {
  let component: SinifOgrenciPage;
  let fixture: ComponentFixture<SinifOgrenciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinifOgrenciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinifOgrenciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
