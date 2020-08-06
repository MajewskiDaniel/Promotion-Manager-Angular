import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-promotion-steps",
  templateUrl: "./promotion-steps.component.html",
  styleUrls: ["./promotion-steps.component.scss"],
})
export class PromotionStepsComponent implements OnInit {
  @Output() activeStep = new EventEmitter<number>();

  steps: string[] = [
    "definition",
    "choose products",
    "exclude products",
    "bonus products",
    "products limits",
    "choose clients",
    "exclude clients",
    "client limits",
    "summary",
  ];
  activeTab: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onStepClick(index: number) {
    this.activeStep.emit(index + 1);
    this.activeTab = index;
  }
}
