import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KayitolPage } from './kayitol.page';

describe('KayitolPage', () => {
  let component: KayitolPage;
  let fixture: ComponentFixture<KayitolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KayitolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
