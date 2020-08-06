import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionStepsComponent } from './promotion-steps.component';

describe('PromotionStepsComponent', () => {
  let component: PromotionStepsComponent;
  let fixture: ComponentFixture<PromotionStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
