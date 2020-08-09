import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-promotion-steps",
  templateUrl: "./promotion-steps.component.html",
  styleUrls: ["./promotion-steps.component.scss"],
})
export class PromotionStepsComponent implements OnInit {
  @Output() activeStep = new EventEmitter<number>();
  @Input() disabled: boolean;

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
  activeTab: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onStepClick(index: number) {
    this.activeStep.emit(index);
    this.activeTab = index;
  }
}
