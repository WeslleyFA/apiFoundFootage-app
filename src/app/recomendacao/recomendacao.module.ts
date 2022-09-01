import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacaoComponent } from './recomendacao.component';



@NgModule({
  declarations: [RecomendacaoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RecomendacaoComponent
  ]
})
export class RecomendacaoModule { }
