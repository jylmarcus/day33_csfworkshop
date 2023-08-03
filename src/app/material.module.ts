import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatDatepickerModule } from '@angular/material/datepicker'

const MATERIAL = [MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule];

@NgModule({
  declarations: [],
  imports: [
    MATERIAL
  ],
  exports: [
    MATERIAL
  ]
})
export class MaterialModule { }
