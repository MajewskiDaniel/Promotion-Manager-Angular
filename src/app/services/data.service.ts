import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
import { Step1, DescriptionForm, ConditionsForm } from "../models/step1";
import { Steps } from "../models/steps";

const DEFAULTS: Step1 = {
  conditionsForm: {
    portal: "",
    type: "",
    benefitAmount: "",
    startDate: "",
    endDate: "",
    conditions: "",
    connectWithOther: false,
    backPromotion: false,
  },
  descriptionForm: {
    marketingName: "",
    technicalName: "",
    description: "",
  },
};

const DEFAULT_STEPS: Steps = {
  productName: "",
  category: "",
  description: "",
};

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private localStorageService: LocalStorageService) {}

  save(step: string, data: Steps | DescriptionForm | ConditionsForm) {
    console.log("DataService:: save", step, data);

    return this.localStorageService.set(step, data);
  }

  loadStep(stepId: string) {
    const step = this.localStorageService.get(stepId);
    console.log("DataService:: loadStep", stepId, step);
    if (step) {
      return step;
    } else {
      if (stepId === "1") {
        return DEFAULTS;
      } else {
        return DEFAULT_STEPS;
      }
    }
  }
}
