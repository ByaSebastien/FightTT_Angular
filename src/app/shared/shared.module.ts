import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';


@NgModule({
  declarations: [
    EnumToArrayPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    EnumToArrayPipe
  ]
})
export class SharedModule { }
