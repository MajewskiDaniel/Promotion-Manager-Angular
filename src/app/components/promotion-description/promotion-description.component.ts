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
  @Output() stepsDisabled = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.sub = this.form.valueChanges.subscribe((values: DescriptionForm) => {
      this.descriptionForm.emit(values);
    });

    // this.form.controls["marketingName"].valueChanges.subscribe((value) => {
    //   this.stepsDisabled.emit(!!value);
    // });
  }

  ngOnChanges({ formData }: SimpleChanges) {
    this.form = this.fb.group({
      marketingName: ["", Validators.required],
      technicalName: [],
      description: [],
    });
    console.log("Prom-form-comp, formData::", formData);
    if (formData) {
      this.form.patchValue(this.formData);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
