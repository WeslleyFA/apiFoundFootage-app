import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule
  ],
  exports:[
    CategoriasComponent
  ]
})
export class CategoriasModule { }
