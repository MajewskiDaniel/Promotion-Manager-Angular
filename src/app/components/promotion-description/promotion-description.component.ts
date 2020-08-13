import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { DescriptionForm } from "../../models/step1";

@Component({
  selector: "app-promotion-description",
  templateUrl: "./promotion-description.component.html",
  styleUrls: ["./promotion-description.component.scss"],
})
export class PromotionDescriptionComponent
  implements OnInit, OnChanges, OnDestroy {
  public form: FormGroup;
  private sub: Subscription;

  @Input() formData: DescriptionForm;
  @Output() descriptionForm = new EventEmitter<DescriptionForm>();
  // @Output() stepsDisabled = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges({ formData }: SimpleChanges) {
    this.form = this.fb.group({
      marketingName: ["", Validators.required],
      technicalName: [],
      description: [],
    });
    // this.form.controls.marketingName.valueChanges.subscribe((value) => {
    //   console.log("prom-desc-comp, onChanges, value:", value);
    //   this.stepsDisabled.emit(!!value);
    // });
    if (formData) {
      // console.log("Prom-desc-comp, formData::", formData);
      // console.log("Prom-desc-comp, this.formData::", this.formData);
      // console.log("Prom-desc-comp, this.form::", this.form);
      this.form.patchValue(this.formData);
    }
    this.sub = this.form.valueChanges.subscribe((values: DescriptionForm) => {
      this.descriptionForm.emit(values);
      console.log("DescriptionFormComponent, this.form:", this.form);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
