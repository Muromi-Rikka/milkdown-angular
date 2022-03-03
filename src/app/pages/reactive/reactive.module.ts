import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MilkdownModule } from "projects/milkdown/src/public-api";

import { ReactiveComponent } from "./reactive.component";
import { ReactiveRoutingModule } from "./reactive-routing.module";

@NgModule({
  declarations: [ReactiveComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    MilkdownModule,
  ],
})
export class ReactiveModule {}
