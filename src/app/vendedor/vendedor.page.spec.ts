import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorPage } from './vendedor.page';

describe('VendedorPage', () => {
  let component: VendedorPage;
  let fixture: ComponentFixture<VendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
