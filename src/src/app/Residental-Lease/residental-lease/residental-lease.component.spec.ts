import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentalLeaseComponent } from './residental-lease.component';

describe('ResidentalLeaseComponent', () => {
  let component: ResidentalLeaseComponent;
  let fixture: ComponentFixture<ResidentalLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentalLeaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentalLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
