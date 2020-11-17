import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiniflarOgrenciPage } from './siniflar-ogrenci.page';

describe('SiniflarOgrenciPage', () => {
  let component: SiniflarOgrenciPage;
  let fixture: ComponentFixture<SiniflarOgrenciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniflarOgrenciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiniflarOgrenciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
