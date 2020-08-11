export interface Step1 {
  descriptionForm: DescriptionForm;
  conditionsForm: ConditionsForm;
}

export interface DescriptionForm {
  marketingName: string;
  technicalName: string;
  description: string;
}

export interface ConditionsForm {
  portal: string; //czy zrobić enum?
  type: string; //czy enum?
  benefitAmount: string;
  startDate: string;
  endDate: string;
  conditions: string;
  connectWithOther: boolean;
  backPromotion: boolean;
}
