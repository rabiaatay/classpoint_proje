import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinavOlusturPage } from './sinav-olustur.page';

describe('SinavOlusturPage', () => {
  let component: SinavOlusturPage;
  let fixture: ComponentFixture<SinavOlusturPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinavOlusturPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinavOlusturPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
