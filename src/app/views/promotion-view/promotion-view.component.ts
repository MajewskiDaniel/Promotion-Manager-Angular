import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../services/data.service";
import { Steps } from "../../models/steps";
import { PromotionData } from "../../models/form";
import { DescriptionForm } from "src/app/models/step1";
import { ConditionsForm } from "../../models/step1";

@Component({
  selector: "app-promotion-view",
  templateUrl: "./promotion-view.component.html",
  styleUrls: ["./promotion-view.component.scss"],
})
export class PromotionViewComponent implements OnInit {
  activeStep: number = 1;
  disabled: boolean = true;

  myForm: PromotionData = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadStep(this.activeStep);
    // TODO: How to store / reatrive multiple steps ?
    // this.myForm = this.dataService.loadData();
  }

  activeStepChange(stepNumber: number) {
    this.activeStep = stepNumber;
    this.loadStep(stepNumber);
    console.log("promotion-view::", this.activeStep);
  }

  stepsStatusHandler(status: boolean) {
    this.disabled = status;
  }

  saveDescriptionForm(form: DescriptionForm) {
    this.myForm.step1.descriptionForm = form;
    console.log("prom-view-comp, SaveDescriptionForm", this.myForm, form);
    this.dataService.save("descForm", form);
  }

  saveConditionsForm(form: ConditionsForm) {
    this.myForm.step1.conditionsForm = form;
    console.log("prom-view-comp, SavePromotionsForm", this.myForm, form);
    this.dataService.save("condForm", form);
  }

  saveStep(activeStep: number, form: Steps) {
    this.myForm["step" + activeStep] = form;
    console.log("prom-view-comp, SaveStep", this.myForm, form);
    this.dataService.save("" + activeStep, form);
  }
  // saveStep3(form) {}
  // saveStep4(form) {}

  private loadStep(step: number) {
    this.myForm["step" + step] = this.dataService.loadStep("" + step);
  } // kiedy private/public a kiedy nic
}
