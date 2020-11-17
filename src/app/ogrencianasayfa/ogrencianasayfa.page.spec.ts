import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OgrencianasayfaPage } from './ogrencianasayfa.page';

describe('OgrencianasayfaPage', () => {
  let component: OgrencianasayfaPage;
  let fixture: ComponentFixture<OgrencianasayfaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrencianasayfaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OgrencianasayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
