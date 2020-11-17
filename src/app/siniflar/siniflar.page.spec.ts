import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiniflarPage } from './siniflar.page';

describe('SiniflarPage', () => {
  let component: SiniflarPage;
  let fixture: ComponentFixture<SiniflarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniflarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiniflarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
