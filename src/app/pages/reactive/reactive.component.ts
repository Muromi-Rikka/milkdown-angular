import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.scss"],
})
export class ReactiveComponent {
  public form = this.fb.group({
    markdown: ["", [Validators.required]],
  });

  // eslint-disable-next-line no-unused-vars
  constructor(private fb: FormBuilder) {}
}
