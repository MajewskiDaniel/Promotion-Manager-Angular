import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promotion-view",
  templateUrl: "./promotion-view.component.html",
  styleUrls: ["./promotion-view.component.scss"],
})
export class PromotionViewComponent implements OnInit {
  activeStep: number = 1;

  constructor() {}

  ngOnInit(): void {}

  activeStepChange(stepNumber) {
    this.activeStep = stepNumber;
  }
}