import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacaoComponent } from './recomendacao.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RecomendacaoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RecomendacaoComponent
  ]
})
export class RecomendacaoModule { }
