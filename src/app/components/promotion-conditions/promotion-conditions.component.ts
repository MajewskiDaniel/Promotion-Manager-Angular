import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ConditionsForm } from "../../models/step1";

@Component({
  selector: "app-promotion-conditions",
  templateUrl: "./promotion-conditions.component.html",
  styleUrls: ["./promotion-conditions.component.scss"],
})
export class PromotionConditionsComponent
  implements OnInit, OnDestroy, OnChanges {
  public form: FormGroup;
  private sub: Subscription;

  @Input() formData: ConditionsForm;
  @Output() conditionsForm = new EventEmitter<ConditionsForm>();

  public portalOptions = [
    { value: "portal1", label: "Portal 1" },
    { value: "portal2", label: "Portal 2" },
  ];
  public catalogueOptions = [
    { value: "catalogue", label: "Catalogue" },
    { value: "bonus", label: "Bonus" },
    { value: "other", label: "Other" },
  ];
  public radioButtons = [
    { value: "bussiness", label: "Business conditions" },
    { value: "base", label: "Base price 100%" },
  ];
  public checkboxes = [
    {
      value: "connect",
      label: "Connect with other promotions",
      formName: "connectWithOther",
    },
    {
      value: "back",
      label: "Back promotion",
      formName: "backPromotion",
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges({ formData }: SimpleChanges) {
    this.form = this.fb.group({
      portal: ["", Validators.required],
      type: ["", Validators.required],
      benefit: [],
      startDate: ["", Validators.required],
      endDate: [],
      conditions: [],
      connectWithOther: [],
      backPromotion: [],
    });
    if (formData) {
      this.form.patchValue(this.formData);
    }
    this.sub = this.form.valueChanges.subscribe((values: ConditionsForm) => {
      this.conditionsForm.emit(values);
      // console.log("PromotionConditionsComponent::", values);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
