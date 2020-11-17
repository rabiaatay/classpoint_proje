import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OgretmenanasayfaPage } from './ogretmenanasayfa.page';

describe('OgretmenanasayfaPage', () => {
  let component: OgretmenanasayfaPage;
  let fixture: ComponentFixture<OgretmenanasayfaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgretmenanasayfaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OgretmenanasayfaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
