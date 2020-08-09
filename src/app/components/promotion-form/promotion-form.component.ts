import {
  Component,
  EventEmitter,
  Output,
  OnDestroy,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Step2 } from "../../models/step2";

@Component({
  selector: "app-promotion-form",
  templateUrl: "./promotion-form.component.html",
  styleUrls: ["./promotion-form.component.scss"],
})
export class PromotionFormComponent implements OnInit, OnDestroy, OnChanges {
  public form: FormGroup;
  private sub: Subscription;

  @Input() activeStep: number;
  @Input() formData: Step2;
  @Output() saveForm = new EventEmitter<Step2>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      productName: ["", Validators.required],
      category: [],
      description: [],
    });

    this.sub = this.form.valueChanges.subscribe((values: Step2) => {
      this.saveForm.emit(values);
    });
  }

  ngOnChanges({ formData }: SimpleChanges) {
    if (formData) {
      this.form.patchValue(this.formData, { emitEvent: false });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
