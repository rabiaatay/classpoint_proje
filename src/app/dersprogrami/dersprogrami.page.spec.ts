import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DersprogramiPage } from './dersprogrami.page';

describe('DersprogramiPage', () => {
  let component: DersprogramiPage;
  let fixture: ComponentFixture<DersprogramiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DersprogramiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DersprogramiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
