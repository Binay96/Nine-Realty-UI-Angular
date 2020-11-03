import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateConsultancesComponent } from './realestate-consultances.component';

describe('RealestateConsultancesComponent', () => {
  let component: RealestateConsultancesComponent;
  let fixture: ComponentFixture<RealestateConsultancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateConsultancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateConsultancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
