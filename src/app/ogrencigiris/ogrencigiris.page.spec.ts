import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OgrencigirisPage } from './ogrencigiris.page';

describe('OgrencigirisPage', () => {
  let component: OgrencigirisPage;
  let fixture: ComponentFixture<OgrencigirisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgrencigirisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OgrencigirisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
