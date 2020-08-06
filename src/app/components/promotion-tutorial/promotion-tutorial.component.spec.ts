import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTutorialComponent } from './promotion-tutorial.component';

describe('PromotionTutorialComponent', () => {
  let component: PromotionTutorialComponent;
  let fixture: ComponentFixture<PromotionTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
