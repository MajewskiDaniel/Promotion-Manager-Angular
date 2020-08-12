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
import { Steps } from "../../models/steps";

@Component({
  selector: "app-promotion-form",
  templateUrl: "./promotion-form.component.html",
  styleUrls: ["./promotion-form.component.scss"],
})
export class PromotionFormComponent implements OnInit, OnDestroy, OnChanges {
  public form: FormGroup;
  private sub: Subscription;

  @Input() activeStep: number;
  @Input() formData: Steps | undefined; // chyba już undefined nie potrzebne
  @Output() saveForm = new EventEmitter<Steps>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges({ formData }: SimpleChanges) {
    this.form = this.fb.group({
      productName: ["", Validators.required],
      category: [],
      description: [],
    });

    if (formData) {
      console.log("PromotionFormComponent, formData:", formData);
      console.log("PromotionFormComponent, this.formData:", this.formData);
      console.log("PromotionFormComponent, this.form:", this.form);
      this.form.patchValue(this.formData);
      // this.form.patchValue(this.formData, { emitEvent: false });
    }
    this.sub = this.form.valueChanges.subscribe((values: Steps) => {
      this.saveForm.emit(values);
      console.log("PromotionFormComponent, this.form:", this.form);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
