import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './views/details-view/details-view.component';
import { PromotionViewComponent } from './views/promotion-view/promotion-view.component';
import { PromotionStepsComponent } from './components/promotion-steps/promotion-steps.component';
import { PromotionDescriptionComponent } from './components/promotion-description/promotion-description.component';
import { PromotionConditionsComponent } from './components/promotion-conditions/promotion-conditions.component';
import { PromotionTutorialComponent } from './components/promotion-tutorial/promotion-tutorial.component';
import { PromotionFormComponent } from './components/promotion-form/promotion-form.component';
import { PromotionSummaryComponent } from './components/promotion-summary/promotion-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    PromotionViewComponent,
    PromotionStepsComponent,
    PromotionDescriptionComponent,
    PromotionConditionsComponent,
    PromotionTutorialComponent,
    PromotionFormComponent,
    PromotionSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
