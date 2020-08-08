export interface Step1 {
  description: Description;
  conditions: Conditions;
}

export interface Description {
  marketingName: string;
  technicalName: string;
  description: string;
}

export interface Conditions {
  portal: string; //czy zrobić enum?
  type: string; //czy enum?
  benefitAmount: string;
  startDate: string;
  endDate: string;
  conditions: string;
  connectWithOther: boolean;
  backPromotion: boolean;
}
