import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Description } from "../../models/step1";

@Component({
  selector: "app-promotion-description",
  templateUrl: "./promotion-description.component.html",
  styleUrls: ["./promotion-description.component.scss"],
})
export class PromotionDescriptionComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private sub: Subscription;

  @Output() descriptionFormValues = new EventEmitter<Description>();
  @Output() stepsDisabled = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      marketingName: ["", Validators.required],
      technicalName: [],
      description: [],
    });

    this.sub = this.form.valueChanges.subscribe((values: Description) => {
      this.descriptionFormValues.emit(values);
    });

    this.form.controls["marketingName"].valueChanges.subscribe((value) => {
      this.stepsDisabled.emit(!!value);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
