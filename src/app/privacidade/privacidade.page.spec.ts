import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacidadePage } from './privacidade.page';

describe('PrivacidadePage', () => {
  let component: PrivacidadePage;
  let fixture: ComponentFixture<PrivacidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
