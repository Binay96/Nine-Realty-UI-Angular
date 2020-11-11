import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadelementComponent } from './headelement.component';

describe('HeadelementComponent', () => {
  let component: HeadelementComponent;
  let fixture: ComponentFixture<HeadelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
