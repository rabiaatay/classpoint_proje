import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OgretmengirisPage } from './ogretmengiris.page';

describe('OgretmengirisPage', () => {
  let component: OgretmengirisPage;
  let fixture: ComponentFixture<OgretmengirisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgretmengirisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OgretmengirisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
