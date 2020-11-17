import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesajlarPage } from './mesajlar.page';

describe('MesajlarPage', () => {
  let component: MesajlarPage;
  let fixture: ComponentFixture<MesajlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesajlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesajlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
