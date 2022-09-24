import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugestaoComponent } from './sugestao.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SugestaoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SugestaoComponent
  ]
})
export class SugestaoModule { }
