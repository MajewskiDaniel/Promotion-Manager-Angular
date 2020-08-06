import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionConditionsComponent } from './promotion-conditions.component';

describe('PromotionConditionsComponent', () => {
  let component: PromotionConditionsComponent;
  let fixture: ComponentFixture<PromotionConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
