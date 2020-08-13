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
  disabled: boolean;
  typeField: string;
  myForm: PromotionData = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadStep(this.activeStep);
    // TODO: How to store / reatrive multiple steps ?
    // this.myForm = this.dataService.loadData();
    this.disableStepsHandler(this.myForm);
  }

  activeStepChange(stepNumber: number) {
    this.activeStep = stepNumber;
    this.loadStep(stepNumber);
    // console.log("promotion-view::", this.activeStep);
  }

  stepsStatusHandler(status: boolean) {
    this.disabled = status;
  }

  saveDescriptionForm(activeStep: number, form: DescriptionForm) {
    this.myForm.step1.descriptionForm = form;
    // console.log("prom-view-comp, SaveDescriptionForm", this.myForm, form);
    this.dataService.save("" + activeStep, this.myForm.step1);
    this.disableStepsHandler(this.myForm);
  }

  saveConditionsForm(activeStep: number, form: ConditionsForm) {
    this.myForm.step1.conditionsForm = form;
    // console.log("prom-view-comp, SavePromotionsForm", this.myForm, form);
    this.dataService.save("" + activeStep, this.myForm.step1);
  }

  saveStep(activeStep: number, form: Steps) {
    this.myForm["step" + activeStep] = form;
    // console.log("prom-view-comp, SaveStep", this.myForm, form);
    this.dataService.save("" + activeStep, form);
  }

  loadStep(activeStep: number) {
    this.myForm["step" + activeStep] = this.dataService.loadStep(
      "" + activeStep
    );
  } // kiedy private/public a kiedy nic

  disableStepsHandler(form: PromotionData) {
    let marketing = form.step1.descriptionForm.marketingName;
    let technical = form.step1.descriptionForm.technicalName;
    if (marketing || technical) {
      this.disabled = false;
    } else this.disabled = true;
    console.log("prom-view-comp, disabled:", this.disabled);
    let type = form.step1.conditionsForm.type;
    if (type === "bonus") {
      this.typeField = "bonus";
    } else if (type === "other") {
      this.typeField = "other";
    }
  }
}
