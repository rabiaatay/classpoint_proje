import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinifPage } from './sinif.page';

describe('SinifPage', () => {
  let component: SinifPage;
  let fixture: ComponentFixture<SinifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
