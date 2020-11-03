import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGiftingComponent } from './corporate-gifting.component';

describe('CorporateGiftingComponent', () => {
  let component: CorporateGiftingComponent;
  let fixture: ComponentFixture<CorporateGiftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateGiftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateGiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
