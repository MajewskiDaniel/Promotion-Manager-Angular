import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PromotionViewComponent } from "./views/promotion-view/promotion-view.component";
import { DetailsViewComponent } from "./views/details-view/details-view.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "promotion",
    pathMatch: "full",
  },
  {
    path: "promotion",
    component: PromotionViewComponent,
  },
  {
    path: "details",
    component: DetailsViewComponent,
  },
  // {
  //   path: "promotion/:id",
  //   component: PromotionViewComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
