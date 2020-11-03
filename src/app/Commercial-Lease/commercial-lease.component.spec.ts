import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialLeaseComponent } from './commercial-lease.component';

describe('CommercialLeaseComponent', () => {
  let component: CommercialLeaseComponent;
  let fixture: ComponentFixture<CommercialLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialLeaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
