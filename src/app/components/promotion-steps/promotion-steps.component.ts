import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-promotion-steps",
  templateUrl: "./promotion-steps.component.html",
  styleUrls: ["./promotion-steps.component.scss"],
})
export class PromotionStepsComponent implements OnInit, OnChanges {
  @Output() activeStep = new EventEmitter<number>();
  @Input() disabled: boolean;
  @Input() typeField: string;

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

  ngOnChanges({ typeField }: SimpleChanges) {
    // if (typeField.currentValue === "bonus") {
    //   console.log("prom-steps-comp, onChanges, typeField:", typeField);
    // }
  }

  onStepClick(index: number) {
    if (this.disabled) {
      return;
    } else {
      this.activeStep.emit(index);
      this.activeTab = index;
    }
  }
}
