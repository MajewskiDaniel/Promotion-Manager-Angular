import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionDescriptionComponent } from './promotion-description.component';

describe('PromotionDescriptionComponent', () => {
  let component: PromotionDescriptionComponent;
  let fixture: ComponentFixture<PromotionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
