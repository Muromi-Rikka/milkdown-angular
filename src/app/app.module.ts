import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MilkdownComponent, MilkdownModule } from 'projects/milkdown/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MilkdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
