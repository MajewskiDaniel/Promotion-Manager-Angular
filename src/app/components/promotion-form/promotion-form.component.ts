import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
  Input,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Step2 } from "../../models/step2";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-promotion-form",
  templateUrl: "./promotion-form.component.html",
  styleUrls: ["./promotion-form.component.scss"],
})
export class PromotionFormComponent implements OnInit {
  public form: FormGroup;
  private sub: Subscription;

  @Output() saveForm = new EventEmitter<Step2>();

  constructor(private fb: FormBuilder, private storage: DataService) {}

  ngOnInit() {
    let rawData = this.storage.loadData("2") as Step2;
    this.form = this.fb.group({
      productName: [rawData?.productName || "", Validators.required],
      category: [],
      description: [],
    });

    this.sub = this.form.valueChanges.subscribe((values: Step2) => {
      this.saveForm.emit(values);
      console.log(values);
      this.storage.saveData("2", values);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
