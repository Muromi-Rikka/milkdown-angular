import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "milkdown-angular";

  public form = this.fb.group({
    content: ["", []],
  });

  // eslint-disable-next-line no-unused-vars
  constructor(private fb: FormBuilder) {}

  public handleClickSubmit(): void {
    console.log(this.form.value);
  }
}
