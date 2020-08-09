import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../services/data.service";

@Component({
  selector: "app-promotion-view",
  templateUrl: "./promotion-view.component.html",
  styleUrls: ["./promotion-view.component.scss"],
})
export class PromotionViewComponent implements OnInit {
  activeStep: number = 1;
  disabled: boolean = true;

  myForm: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // TODO: How to store / reatrive multiple steps ?
    // this.formularz = this.dataService.loadData();
  }

  activeStepChange(stepNumber) {
    this.activeStep = stepNumber;
  }

  stepsStatusHandler(status: boolean) {
    this.disabled = status;
  }

  descriptionFormHandler(form) {}

  saveStep(step, form) {
    this.myForm[step] = form;
    this.dataService.saveData(step, form);
  }
  // saveStep3(form) {}
  // saveStep4(form) {}
}
