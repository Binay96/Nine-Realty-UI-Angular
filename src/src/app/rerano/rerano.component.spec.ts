import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReranoComponent } from './rerano.component';

describe('ReranoComponent', () => {
  let component: ReranoComponent;
  let fixture: ComponentFixture<ReranoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReranoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
