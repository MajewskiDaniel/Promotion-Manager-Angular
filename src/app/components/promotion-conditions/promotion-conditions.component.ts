import {
  Component,
  OnInit,
  Output,
  OnDestroy,
  EventEmitter,
} from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Conditions } from "../../models/step1";

@Component({
  selector: "app-promotion-conditions",
  templateUrl: "./promotion-conditions.component.html",
  styleUrls: ["./promotion-conditions.component.scss"],
})
export class PromotionConditionsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private sub: Subscription;
  @Output() conditionsFormValues = new EventEmitter();

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

  ngOnInit() {
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
    this.sub = this.form.valueChanges.subscribe((values: Conditions) => {
      this.conditionsFormValues.emit(values);
      console.log(values);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
