import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "reactive",
    loadChildren: () =>
      import("./pages/reactive/reactive.module").then((m) => m.ReactiveModule),
  },
  {
    path: "custom",
    loadChildren: () =>
      import("./pages/custom/custom.module").then((m) => m.CustomModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
