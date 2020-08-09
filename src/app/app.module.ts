import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsViewComponent } from "./views/details-view/details-view.component";
import { PromotionViewComponent } from "./views/promotion-view/promotion-view.component";
import { PromotionStepsComponent } from "./components/promotion-steps/promotion-steps.component";
import { PromotionDescriptionComponent } from "./components/promotion-description/promotion-description.component";
import { PromotionConditionsComponent } from "./components/promotion-conditions/promotion-conditions.component";
import { PromotionTutorialComponent } from "./components/promotion-tutorial/promotion-tutorial.component";
import { PromotionFormComponent } from "./components/promotion-form/promotion-form.component";
import { PromotionSummaryComponent } from "./components/promotion-summary/promotion-summary.component";
import { DividerComponent } from "./components/shared/divider/divider.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

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
    PromotionSummaryComponent,
    DividerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
