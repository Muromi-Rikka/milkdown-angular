import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MilkdownModule } from "projects/milkdown/src/public-api";

import { CustomComponent } from "./custom.component";
import { CustomRoutingModule } from "./custom-routing.module";

@NgModule({
  declarations: [CustomComponent],
  imports: [CommonModule, CustomRoutingModule, MilkdownModule],
})
export class CustomModule {}
