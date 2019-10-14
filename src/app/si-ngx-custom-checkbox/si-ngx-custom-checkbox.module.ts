import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiCheckboxComponent } from './si-checkbox/si-checkbox.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SiRadioComponent } from './si-radio/si-radio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [SiCheckboxComponent, SiRadioComponent],
  exports: [SiCheckboxComponent, SiRadioComponent]
})
export class SiNgxCustomCheckboxModule { }
